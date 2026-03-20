/* ─── 3D Background — Three.js r128 ─── */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, 40);

  /* ── Palette ── */
  const C_GOLD   = new THREE.Color(0xd4a853);
  const C_DIM    = new THREE.Color(0x3a3020);
  const C_WHITE  = new THREE.Color(0xe8e4dc);

  /* ── Particles ── */
  const PARTICLE_COUNT = 120;
  const pGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const sizes     = new Float32Array(PARTICLE_COUNT);
  const alphas    = new Float32Array(PARTICLE_COUNT);
  const velocities = [];
  const originalPos = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 80;
    const z = (Math.random() - 0.5) * 60;
    positions[i * 3]     = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    originalPos.push(x, y, z);
    sizes[i] = 0.15 + Math.random() * 0.4;
    alphas[i] = 0.3 + Math.random() * 0.7;
    velocities.push(
      (Math.random() - 0.5) * 0.008,
      (Math.random() - 0.5) * 0.006,
      (Math.random() - 0.5) * 0.004
    );
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const pMat = new THREE.ShaderMaterial({
    uniforms: { color: { value: C_GOLD }, time: { value: 0 } },
    vertexShader: `
      attribute float size;
      uniform float time;
      varying float vAlpha;
      void main() {
        vAlpha = 0.4 + 0.3 * sin(time * 0.5 + position.x * 0.1);
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (280.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = vAlpha * (1.0 - smoothstep(0.2, 0.5, d));
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  /* ── Connection lines ── */
  const MAX_DIST = 22;
  const lineMat = new THREE.LineBasicMaterial({
    color: C_DIM,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  let linesMesh = null;
  function buildLines() {
    if (linesMesh) scene.remove(linesMesh);
    const pos = pGeo.attributes.position.array;
    const pts = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = pos[i*3]   - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        const dz = pos[i*3+2] - pos[j*3+2];
        if (Math.sqrt(dx*dx + dy*dy + dz*dz) < MAX_DIST) {
          pts.push(pos[i*3], pos[i*3+1], pos[i*3+2]);
          pts.push(pos[j*3], pos[j*3+1], pos[j*3+2]);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
    linesMesh = new THREE.LineSegments(geo, lineMat);
    scene.add(linesMesh);
  }
  buildLines();

  /* ── Floating geometric rings ── */
  function makeRing(radius, tube, segments, color, opacity, x, y, z) {
    const geo = new THREE.TorusGeometry(radius, tube, 8, segments);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, wireframe: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    scene.add(mesh);
    return mesh;
  }

  const rings = [
    makeRing(12, 0.05, 64, C_GOLD,  0.12, -20, 10, -10),
    makeRing(7,  0.04, 48, C_GOLD,  0.08,  25, -8, -5),
    makeRing(18, 0.06, 80, C_WHITE, 0.04,  5,   0, -20),
    makeRing(4,  0.05, 32, C_GOLD,  0.15,  0,  15,  5),
  ];

  /* ── Icosahedron wireframes ── */
  function makeIco(r, color, opacity, x, y, z) {
    const geo = new THREE.IcosahedronGeometry(r, 1);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, wireframe: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  }

  const icos = [
    makeIco(6,  C_GOLD,  0.08, -30,  5, -15),
    makeIco(3,  C_GOLD,  0.12,  30, -10,  0),
    makeIco(9,  C_WHITE, 0.04,  0,  -18, -25),
  ];

  /* ── Mouse & scroll state ── */
  let mouseX = 0, mouseY = 0;
  let targetMX = 0, targetMY = 0;
  let scrollY = 0, targetScrollY = 0;

  document.addEventListener('mousemove', e => {
    targetMX = (e.clientX / window.innerWidth  - 0.5) * 2;
    targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  /* ── Resize ── */
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ── Animate ── */
  let frame = 0;
  let lineTimer = 0;

  function animate() {
    requestAnimationFrame(animate);
    frame++;
    const t = frame * 0.005;

    // Smooth mouse & scroll
    mouseX += (targetMX - mouseX) * 0.06;
    mouseY += (targetMY - mouseY) * 0.06;
    scrollY += (targetScrollY - scrollY) * 0.08;

    pMat.uniforms.time.value = t;

    // Move particles
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i*3]     += velocities[i*3];
      pos[i*3+1]   += velocities[i*3+1];
      pos[i*3+2]   += velocities[i*3+2];
      // Wrap
      if (Math.abs(pos[i*3])   > 65) velocities[i*3]   *= -1;
      if (Math.abs(pos[i*3+1]) > 45) velocities[i*3+1] *= -1;
      if (Math.abs(pos[i*3+2]) > 35) velocities[i*3+2] *= -1;
    }
    pGeo.attributes.position.needsUpdate = true;

    // Rebuild lines every 6 frames
    lineTimer++;
    if (lineTimer % 6 === 0) buildLines();

    // Camera parallax from mouse + scroll drift
    camera.position.x += (mouseX * 6 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 4 - camera.position.y) * 0.04;
    camera.position.z = 40 + scrollY * 0.012;
    camera.lookAt(0, 0, 0);

    // Spin rings
    rings.forEach((r, i) => {
      r.rotation.x += 0.002 + i * 0.0005;
      r.rotation.y += 0.003 + i * 0.0003;
      r.rotation.z += 0.001;
      // Float up/down
      r.position.y += Math.sin(t + i * 1.5) * 0.01;
    });

    // Spin icos
    icos.forEach((ic, i) => {
      ic.rotation.x += 0.003 + i * 0.001;
      ic.rotation.y += 0.004 + i * 0.001;
      ic.position.y += Math.sin(t * 0.7 + i * 2) * 0.008;
    });

    // Subtle overall scene mouse tilt
    scene.rotation.y += (mouseX * 0.04 - scene.rotation.y) * 0.03;
    scene.rotation.x += (-mouseY * 0.02 - scene.rotation.x) * 0.03;

    renderer.render(scene, camera);
  }

  animate();
})();
