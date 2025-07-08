/* app.js – StudyHub SPA (Alpine.js 3) */

/************** Helpers **************/
function uuid() {
    let rnd;
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        rnd = crypto.getRandomValues(new Uint8Array(16));
    } else {
        rnd = new Uint8Array(16);
        for (let i = 0; i < 16; i++) rnd[i] = Math.floor(Math.random() * 256);
    }
    rnd[6] = (rnd[6] & 0x0f) | 0x40; // version 4
    rnd[8] = (rnd[8] & 0x3f) | 0x80; // variant
    const hex = [...rnd].map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/************** Data Preparation **************/
function prepareData() {
    const raw = JSON.parse(`{"courses":[{"code":"MEEG 303","name":"Fluid Mechanics & Hydraulic Machine","exam_date":"2025-07-16","chapters":[{"title":"Fluid properties","subtopics":["Definition of fluid","Fluid viscosity","Newtonian and non-Newtonian fluids","Density","Surface tension","Compressibility","Vapour pressure","Cohesion and adhesion"]},{"title":"Fluid Statics","subtopics":["Pressure at a point","Basic equation of fluid statics","Pressure variation in static fluid","Hydrostatic force on submerged surfaces","Buoyancy and stability","Fluids in rigid body motion"]},{"title":"Kinematics Of Fluid Flow","subtopics":["Timelines","Streamlines","Streak lines","Path lines","Stream function","Velocity potential","Acceleration of fluid particle","Irrotational flow","Fluid rotation","Circulation and vorticity"]},{"title":"Basic Equations of Fluid Flow","subtopics":["Conservation of mass","Newton's Second Law","Principle of angular momentum","First law of thermodynamics","Reynolds Transport theorem","Euler's Equation","Bernoulli's Equation","Flow measurement devices"]},{"title":"Viscous Flow","subtopics":["Boundary layer concept","Laminar and turbulent boundary layer flow","Flow over flat plates","Energy consideration in pipe flow","Calculation of head loss","Flow about immersed bodies"]},{"title":"Dimensional Analysis and Similitude","subtopics":["Buckingham Pi theorem","Dimensionless groups","Flow similarity","Model studies"]},{"title":"Introduction to Compressible flow","subtopics":["Propagation of sound waves","Stagnation properties","Isentropic flow equations","Effect of area variation","Isentropic flow in converging and diverging nozzles"]}]},{"code":"MEEG 325","name":"Finite Element Method","exam_date":"2025-07-20","chapters":[{"title":"Introduction","subtopics":["History of FEM","Basics of finite element analysis","Applications in heat transfer, fluid mechanics, solid mechanics"]},{"title":"Finite Element Analysis of One Dimensional Problem","subtopics":["Discretization of domain","Generalized coordinates approach","Derivation of element equations","Assembly of element equations","Boundary conditions","Cholesky method","FEM analysis using spring, bar, truss, beam elements"]},{"title":"Finite Element Analysis of Two Dimensional Problems","subtopics":["Governing equations of plane strain and stress","Finite element formulation","Interpolation functions","Triangular and rectangular elements","Convergence criteria"]},{"title":"Isoparametric Elements and Formulation","subtopics":["Natural coordinates","Area coordinates for triangular elements","Isoparametric elements in 1D, 2D, 3D","Lagrangian and serendipity elements"]}]},{"code":"COEG 304","name":"Instrumentation & Control","exam_date":"2025-07-24","chapters":[{"title":"System Introduction","subtopics":["Definition of control systems","History and examples"]},{"title":"Mathematical Modeling","subtopics":["Physical balances","Differential equations"]},{"title":"Laplace Transform","subtopics":["Definitions","Transfer functions","Mathematical block diagrams"]},{"title":"Time Response Analysis","subtopics":["Standard test signals","1st order systems","2nd order systems","Steady state response"]},{"title":"Feedback Characteristics","subtopics":["Parameter variations","System dynamics","Disturbance effects"]},{"title":"Stability Analysis","subtopics":["Impulse response","Routh's criterion","Root locus"]},{"title":"Frequency Response Analysis","subtopics":["Bode diagrams","Graphical representations"]},{"title":"Stability in Frequency Domain","subtopics":["Nyquist stability criterion","Bode-Nyquist stability criterion","Closed-loop frequency response","Nichols chart","Stability margins"]},{"title":"Design of Linear Control Systems","subtopics":["Specifications","PID controllers","Serial compensation","Internal feedback","Feed forward control"]},{"title":"State Space Analysis","subtopics":["Multivariable systems","Matrix representation","Transfer matrix","Multivariable feedback"]}]},{"code":"MGTS 301","name":"Engineering Economics","exam_date":"2025-07-28","chapters":[{"title":"Fundamentals of Engineering Economy","subtopics":["Microeconomics and Macroeconomics","GDP","Managerial Economics","Law of Supply and Demand","Market Equilibrium"]},{"title":"Cost Concepts and Design Economics","subtopics":["Cost classifications","Economic environment","Break-even point","Cost estimation techniques","Value engineering"]},{"title":"Time Value of Money","subtopics":["Simple and compound interest","Cash flow diagrams","Present, future, and annual equivalents","Interest rates","Continuous compounding"]},{"title":"Methods for Evaluating Economic Profitability","subtopics":["Minimum Attractive Rate of Return (MARR)","Present Worth Method","Future Worth Method","Annual Worth Method","Internal and External Rate of Return","Payback Period"]},{"title":"Depreciation","subtopics":["Classical depreciation methods","Straight-line","Declining-balance","Sinking fund","Sum-of-years-digit"]},{"title":"Replacement Analysis","subtopics":["Reasons for replacement","Economic life determination"]},{"title":"Benefit-Cost Ratio Method","subtopics":["Public projects evaluation","Comparison of mutually exclusive projects"]},{"title":"Project Risk and Uncertainty","subtopics":["Sources of risk","Breakeven and sensitivity analysis","Scenario analysis"]}]},{"code":"MEEG 315","name":"Machine Element Design & Processes","exam_date":"2025-08-01","chapters":[{"title":"Design Process","subtopics":["Recognition of need","Problem definition","Functional requirements","Material selection","Manufacturing methods"]},{"title":"Conceptualization & Problem Solving","subtopics":["Evaluation of alternatives","Feasibility studies","Creative problem solving","Decision making process"]},{"title":"Working Stresses & Failure Prevention","subtopics":["Stress concentration","Stress concentration factor","Fatigue failure","Endurance limit","Factors of safety"]},{"title":"Joints & Connections","subtopics":["Riveted joints","Welded joints","Threaded fasteners","Power screws"]},{"title":"Mechanical Springs","subtopics":["Helical spring stresses","Spring deflection","Extension vs compression springs","Spring materials","Fatigue in springs","Critical frequency"]},{"title":"Rolling Contact Bearings","subtopics":["Bearing types","Bearing life","Load calculations","Bearing selection","Lubrication","Mounting and enclosure"]},{"title":"Lubrication & Journal Bearings","subtopics":["Types of lubrication","Viscosity","Petroff's law","Hydrodynamic lubrication","Bearing design","Heat balance"]}]}]}`);
    
    raw.courses.forEach(course => {
        course.id = uuid();
        course.chapters.forEach(ch => {
            ch.id = uuid();
            ch.subtopics = ch.subtopics.map(title => ({ id: uuid(), title, status: 'unread' }));
        });
    });
    return raw;
}

/************** Alpine Component **************/

function studyHubApp() {
    return {
        /* ---------- Reactive State ---------- */
        data: prepareData(),
        notes: [],
        flashcards: [],
        quickSheets: [],
        settings: { encrypted: false },
        darkMode: false,
        
        /* Routing */
        route: 'dashboard',
        currentCourse: null,
        currentChapter: null,
        currentSubtopic: null,
        
        /* UI flags */
        sidebarCollapsed: false,
        modalOpen: false,
        modalView: '',
        quillInstance: null,
        
        /* Forms */
        chapterForm: { id: null, title: '', course: null },
        subtopicForm: { id: null, title: '', chapter: null },
        noteForm: { id: null, subtopicId: null, title: '', html: '' },
        flashForm: { id: null, subtopicId: null, front: '', back: '' },
        qsForm: { id: null, courseId: null, title: '', bulletsText: '' },
        qrSearch: '',
        
        /* ---------- Lifecycle ---------- */
        init() {
            this.handleHashChange();
            window.addEventListener('hashchange', () => this.handleHashChange());
            this.initDarkMode();
            
            this.$watch('modalOpen', (isOpen) => {
                if (isOpen && this.modalView === 'note') {
                    this.initQuill();
                }
            });
        },
        
        /* ---------- Dark Mode ---------- */
        initDarkMode() {
            const savedMode = localStorage.getItem('studyHubDarkMode');
            this.darkMode = savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('studyHubDarkMode', JSON.stringify(this.darkMode));
        },
        
        /* ---------- Routing ---------- */
        navigate(hash) { window.location.hash = hash; },
        
        handleHashChange() {
            const hash = window.location.hash || '#/dashboard';
            const parts = hash.substring(2).split('/');
            
            this.currentCourse = null;
            this.currentChapter = null;
            this.currentSubtopic = null;
            
            const routeType = parts[0] || 'dashboard';

            if (routeType === 'course' && parts[1]) {
                this.currentCourse = this.data.courses.find(c => c.id === parts[1]) || null;
                if (!this.currentCourse) {
                    this.route = 'dashboard';
                    return;
                }

                if (parts[2] === 'chapter' && parts[3]) {
                    this.currentChapter = this.currentCourse.chapters.find(ch => ch.id === parts[3]) || null;
                    if (!this.currentChapter) {
                         this.route = 'course';
                         return;
                    }
                    
                    if (parts[4] === 'subtopic' && parts[5]) {
                         this.currentSubtopic = this.currentChapter.subtopics.find(st => st.id === parts[5]) || null;
                         this.route = this.currentSubtopic ? 'subtopic' : 'chapter';
                    } else {
                        this.route = 'chapter';
                    }
                } else {
                    this.route = 'course';
                }
            } else {
                this.route = routeType;
            }
        },
        
        /* ---------- Utils ---------- */
        formatDate(dateStr) { return dayjs(dateStr).format('DD MMM YYYY'); },
        daysLeft(dateStr) { return dayjs(dateStr).diff(dayjs(), 'day'); },
        
        courseProgress(course) {
            const allSubtopics = course.chapters.flatMap(ch => ch.subtopics);
            if (allSubtopics.length === 0) return 0;
            const revisedCount = allSubtopics.filter(s => s.status === 'revised').length;
            return (revisedCount / allSubtopics.length) * 100;
        },
        
        handleChapterSort(chapters, movedItemId, newIndex) {
            const movedItem = chapters.find(c => c.id === movedItemId);
            const oldIndex = chapters.indexOf(movedItem);
            chapters.splice(oldIndex, 1);
            chapters.splice(newIndex, 0, movedItem);
        },

        handleSubtopicSort(subtopics, movedItemId, newIndex) {
            const movedItem = subtopics.find(s => s.id === movedItemId);
            const oldIndex = subtopics.indexOf(movedItem);
            subtopics.splice(oldIndex, 1);
            subtopics.splice(newIndex, 0, movedItem);
        },

        /* ---------- Chapter CRUD ---------- */
        openChapterModal(course) {
            this.chapterForm = { id: null, title: '', course };
            this.modalView = 'chapter';
            this.modalOpen = true;
        },
        editChapter(course, ch) {
            this.chapterForm = { id: ch.id, title: ch.title, course };
            this.modalView = 'chapter';
            this.modalOpen = true;
        },
        saveChapter() {
            const { id, title, course } = this.chapterForm;
            if (!title.trim()) return;
            if (id) {
                const chapter = course.chapters.find(c => c.id === id);
                if (chapter) chapter.title = title;
            } else {
                const newChapter = { id: uuid(), title, subtopics: [] };
                course.chapters.push(newChapter);
            }
            this.closeModal();
        },
        deleteChapter(course, ch) {
            if (confirm('Are you sure you want to delete this chapter and all its contents?')) {
                course.chapters = course.chapters.filter(c => c.id !== ch.id);
            }
        },
        
        /* ---------- Subtopic Status & CRUD ---------- */
        updateSubtopicStatus(subtopic, newStatus) {
            subtopic.status = newStatus;
        },
        addSubtopic(chapter) {
            this.subtopicForm = { id: null, title: '', chapter };
            this.modalView = 'subtopic';
            this.modalOpen = true;
        },
        editSubtopic(chapter, sub) {
            this.subtopicForm = { id: sub.id, title: sub.title, chapter };
            this.modalView = 'subtopic';
            this.modalOpen = true;
        },
        saveSubtopic() {
            const { id, title, chapter } = this.subtopicForm;
            if (!title.trim()) return;
            if (id) {
                const s = chapter.subtopics.find(st => st.id === id);
                if (s) s.title = title;
            } else {
                chapter.subtopics.push({ id: uuid(), title, status: 'unread' });
            }
            this.closeModal();
        },
        deleteSubtopic(chapter, sub) {
            if (confirm('Delete subtopic?')) {
                chapter.subtopics = chapter.subtopics.filter(s => s.id !== sub.id);
            }
        },
        
        /* ---------- Notes CRUD ---------- */
        notesBySubtopic(subtopicId) { return subtopicId ? this.notes.filter(n => n.subtopicId === subtopicId) : []; },
        openNoteModal(note, subtopic) {
            this.noteForm = note ? { ...note } : { id: null, subtopicId: subtopic.id, title: '', html: '' };
            this.modalView = 'note';
            this.modalOpen = true;
        },
        initQuill() {
            this.$nextTick(() => {
                const el = document.getElementById('quillEditor');
                if (el && typeof Quill !== 'undefined' && !this.quillInstance) {
                    this.quillInstance = new Quill(el, { theme: 'snow' });
                    this.quillInstance.root.innerHTML = this.noteForm.html || '';
                    this.quillInstance.on('text-change', () => {
                        this.noteForm.html = this.quillInstance.root.innerHTML;
                    });
                }
            });
        },
        saveNote() {
            this.noteForm.updated = Date.now();
            if (this.noteForm.id) {
                const idx = this.notes.findIndex(n => n.id === this.noteForm.id);
                if (idx > -1) this.notes.splice(idx, 1, { ...this.noteForm });
            } else {
                this.noteForm.id = uuid();
                this.notes.push({ ...this.noteForm });
            }
            this.closeModal();
        },
        deleteNote(note) {
            if (confirm('Delete note?')) this.notes = this.notes.filter(n => n.id !== note.id);
        },
        
        /* ---------- Flashcards CRUD ---------- */
        flashcardsBySubtopic(subtopicId) { return subtopicId ? this.flashcards.filter(f => f.subtopicId === subtopicId) : []; },
        openFlashcardModal(card, subtopic) {
            this.flashForm = card ? { ...card } : { id: null, subtopicId: subtopic.id, front: '', back: '' };
            this.modalView = 'flashcard';
            this.modalOpen = true;
        },
        saveFlashcard() {
            this.flashForm.updated = Date.now();
            if (this.flashForm.id) {
                const idx = this.flashcards.findIndex(f => f.id === this.flashForm.id);
                if (idx > -1) this.flashcards.splice(idx, 1, { ...this.flashForm, flipped: false });
            } else {
                this.flashForm.id = uuid();
                this.flashcards.push({ ...this.flashForm, flipped: false });
            }
            this.closeModal();
        },
        deleteFlashcard(card) {
            if (confirm('Delete flashcard?')) this.flashcards = this.flashcards.filter(f => f.id !== card.id);
        },
        flipCard(card) { card.flipped = !card.flipped; },
        
        /* ---------- Quick Sheets CRUD ---------- */
        quickSheetsFiltered() {
            const q = this.qrSearch.trim().toLowerCase();
            return q ? this.quickSheets.filter(s => s.title.toLowerCase().includes(q)) : this.quickSheets;
        },
        openQuickSheetModal(sheet) {
            this.qsForm = sheet ? { ...sheet, bulletsText: sheet.bullets.join('\n') } : { id: null, courseId: null, title: '', bulletsText: '' };
            this.modalView = 'quicksheet';
            this.modalOpen = true;
        },
        saveQuickSheet() {
            const bullets = this.qsForm.bulletsText.split('\n').map(b => b.trim()).filter(Boolean);
            const sheetData = { ...this.qsForm, bullets, updated: Date.now() };
            if (sheetData.id) {
                const idx = this.quickSheets.findIndex(q => q.id === sheetData.id);
                if (idx > -1) this.quickSheets.splice(idx, 1, sheetData);
            } else {
                sheetData.id = uuid();
                this.quickSheets.push(sheetData);
            }
            this.closeModal();
        },
        deleteQuickSheet(sheet) {
            if (confirm('Delete sheet?')) this.quickSheets = this.quickSheets.filter(q => q.id !== sheet.id);
        },
        
        /* ---------- Modal helpers ---------- */
        closeModal() {
            this.modalOpen = false;
            this.modalView = '';
            if (this.quillInstance) this.quillInstance = null;
        },
        
        /* ---------- Settings ---------- */
        toggleEncryption(ev) { this.settings.encrypted = ev.target.checked; },
        exportData() {
            const payload = { data: this.data, notes: this.notes, flashcards: this.flashcards, quickSheets: this.quickSheets };
            let json = JSON.stringify(payload, null, 2);
            if (this.settings.encrypted) {
                const pass = prompt('Enter passphrase to encrypt backup:');
                if (!pass) return;
                json = CryptoJS.AES.encrypt(json, pass).toString();
            }
            const blob = new Blob([json], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `studyhub-backup-${dayjs().format('YYYY-MM-DD')}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
        },
        importData(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                try {
                    let text = ev.target.result;
                    let obj;
                    try { obj = JSON.parse(text); } 
                    catch (_) {
                        const pass = prompt('Encrypted backup detected. Enter passphrase:');
                        if (!pass) return;
                        const decrypted = CryptoJS.AES.decrypt(text, pass).toString(CryptoJS.enc.Utf8);
                        obj = JSON.parse(decrypted);
                    }
                    if(confirm('This will overwrite all current data. Are you sure?')) {
                        ['data', 'notes', 'flashcards', 'quickSheets'].forEach(k => {
                            if (obj[k]) this[k] = obj[k];
                        });
                        alert('Import successful!');
                        this.navigate('#/dashboard');
                    }
                } catch (err) { alert('Import failed: ' + err.message); }
            };
            reader.readAsText(file);
            e.target.value = '';
        }
    };
}
