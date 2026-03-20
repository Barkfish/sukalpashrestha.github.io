/* ─── 3D Background ─── */
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
  camera.position.set(0, 0, 55);

  /* ── Colors ── */
  const GOLD  = new THREE.Color(0xd4a853);
  const GOLD2 = new THREE.Color(0xf0c060);
  const PALE  = new THREE.Color(0xe8e4dc);

  /* ── Particles ── */
  const N = 160;
  const pos   = new Float32Array(N * 3);
  const sizes = new Float32Array(N);
  const vel   = [];

  for (let i = 0; i < N; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 140;
    pos[i*3+1] = (Math.random() - 0.5) * 90;
    pos[i*3+2] = (Math.random() - 0.5) * 70;
    sizes[i] = 0.5 + Math.random() * 1.2;
    vel.push(
      (Math.random() - 0.5) * 0.012,
      (Math.random() - 0.5) * 0.009,
      (Math.random() - 0.5) * 0.006
    );
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const pMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size;
      uniform float time;
      varying float vAlpha;
      void main() {
        vAlpha = 0.55 + 0.45 * sin(time + position.x * 0.07 + position.y * 0.05);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (350.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = vAlpha * (1.0 - smoothstep(0.1, 0.5, d));
        gl_FragColor = vec4(0.93, 0.75, 0.36, a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  scene.add(new THREE.Points(pGeo, pMat));

  /* ── Connection lines ── */
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x8a6a28,
    transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  let linesMesh = null;
  const MAX_D = 26;

  function buildLines() {
    if (linesMesh) { scene.remove(linesMesh); linesMesh.geometry.dispose(); }
    const arr = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
        if (dx*dx+dy*dy+dz*dz < MAX_D*MAX_D) {
          arr.push(pos[i*3],pos[i*3+1],pos[i*3+2], pos[j*3],pos[j*3+1],pos[j*3+2]);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(arr), 3));
    linesMesh = new THREE.LineSegments(g, lineMat);
    scene.add(linesMesh);
  }
  buildLines();

  /* ── Rings ── */
  function ring(r, tube, seg, color, opacity, x, y, z) {
    const m = new THREE.Mesh(
      new THREE.TorusGeometry(r, tube, 10, seg),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, wireframe: true })
    );
    m.position.set(x, y, z);
    m.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
    scene.add(m); return m;
  }
  const rings = [
    ring(15, 0.12, 80, 0xd4a853, 0.45, -22,  10, -12),
    ring(9,  0.10, 60, 0xf0c060, 0.40,  28,  -8,  -6),
    ring(22, 0.10, 96, 0xe8e4dc, 0.20,   5,   0, -28),
    ring(5,  0.12, 40, 0xd4a853, 0.55,   0,  18,   4),
    ring(11, 0.08, 64, 0xb8914a, 0.35,  15,  -20,  8),
  ];

  /* ── Icosahedra ── */
  function ico(r, color, opacity, x, y, z) {
    const m = new THREE.Mesh(
      new THREE.IcosahedronGeometry(r, 1),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, wireframe: true })
    );
    m.position.set(x, y, z); scene.add(m); return m;
  }
  const icos = [
    ico(7,  0xd4a853, 0.30, -32,  6, -18),
    ico(4,  0xf0c060, 0.45,  32, -12,  0),
    ico(11, 0xe8e4dc, 0.15,   2, -20, -30),
    ico(3,  0xd4a853, 0.50, -10,  22,  6),
  ];

  /* ── Octahedra ── */
  function octa(r, color, opacity, x, y, z) {
    const m = new THREE.Mesh(
      new THREE.OctahedronGeometry(r, 0),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, wireframe: true })
    );
    m.position.set(x, y, z); scene.add(m); return m;
  }
  const octas = [
    octa(5, 0xf0c060, 0.40,  18,  16, -10),
    octa(3, 0xd4a853, 0.50, -18, -14,  5),
  ];

  /* ── Mouse & scroll ── */
  let mx = 0, my = 0, tmx = 0, tmy = 0;
  let scrollY = 0, tScrollY = 0;
  let camBaseX = 0, camBaseY = 0;

  window.addEventListener('mousemove', e => {
    tmx = (e.clientX / window.innerWidth  - 0.5) * 2;
    tmy = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  window.addEventListener('touchmove', e => {
    const t = e.touches[0];
    tmx = (t.clientX / window.innerWidth  - 0.5) * 2;
    tmy = (t.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });
  window.addEventListener('scroll', () => { tScrollY = window.scrollY; }, { passive: true });
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ── Animate ── */
  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame++;
    const t = frame * 0.006;

    mx += (tmx - mx) * 0.07;
    my += (tmy - my) * 0.07;
    scrollY += (tScrollY - scrollY) * 0.09;

    pMat.uniforms.time.value = t;

    // Move particles
    for (let i = 0; i < N; i++) {
      pos[i*3]   += vel[i*3];
      pos[i*3+1] += vel[i*3+1];
      pos[i*3+2] += vel[i*3+2];
      if (Math.abs(pos[i*3])   > 75) vel[i*3]   *= -1;
      if (Math.abs(pos[i*3+1]) > 50) vel[i*3+1] *= -1;
      if (Math.abs(pos[i*3+2]) > 40) vel[i*3+2] *= -1;
    }
    pGeo.attributes.position.needsUpdate = true;
    if (frame % 5 === 0) buildLines();

    // Camera follows mouse — smooth, clear movement
    camBaseX += (mx * 10 - camBaseX) * 0.05;
    camBaseY += (-my * 7  - camBaseY) * 0.05;
    camera.position.x = camBaseX;
    camera.position.y = camBaseY;
    camera.position.z = 55 + scrollY * 0.015;
    camera.lookAt(0, 0, 0);

    // Scene tilt with mouse
    scene.rotation.y += (mx * 0.06 - scene.rotation.y) * 0.04;
    scene.rotation.x += (-my * 0.04 - scene.rotation.x) * 0.04;

    // Rings
    rings.forEach((r, i) => {
      r.rotation.x += 0.003 + i * 0.0006;
      r.rotation.y += 0.004 + i * 0.0004;
      r.position.y += Math.sin(t * 0.8 + i * 1.3) * 0.012;
    });

    // Icos
    icos.forEach((ic, i) => {
      ic.rotation.x += 0.004 + i * 0.001;
      ic.rotation.y += 0.005 + i * 0.001;
      ic.position.y += Math.sin(t * 0.6 + i * 2.1) * 0.010;
    });

    // Octas
    octas.forEach((o, i) => {
      o.rotation.x += 0.006;
      o.rotation.z += 0.005 + i * 0.002;
      o.position.y += Math.sin(t + i * 1.7) * 0.008;
    });

    renderer.render(scene, camera);
  }
  animate();
})();
