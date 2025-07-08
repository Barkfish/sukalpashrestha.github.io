const { useState, useEffect, useReducer, createContext, useContext } = React;

// Initial course data
const initialCourses = [
  {
    code: "MEEG303",
    title: "Fluid Mechanics & Hydraulic Machine",
    examDate: "2025-07-16",
    topics: ["Fluid Properties and Definitions", "Fluid Statics", "Kinematics of Fluid Flow", "Basic Equations of Fluid Flow", "Viscous Flow", "Dimensional Analysis and Similitude", "Introduction to Compressible Flow"],
    customTopics: [],
    notes: [],
    flashcards: [],
    quickRevisions: [],
    completedTopics: []
  },
  {
    code: "MEEG325",
    title: "Finite Element Method",
    examDate: "2025-07-20",
    topics: ["Introduction and History of FEM", "1D Second Order Equations and Discretization", "1D FEM Applications (Spring, Bar, Truss, Beam, Heat Transfer)", "Method of Weighted Residuals and Ritz Method", "2D FEM: Plane Stress/Strain, Triangular and Rectangular Elements", "Isoparametric Elements and Formulation", "Practical Works (Bar, Truss, Bicycle Frame, Cylinder Stress, Thermal Stress, Fin, Dynamics, Pipe Flow)"],
    customTopics: [],
    notes: [],
    flashcards: [],
    quickRevisions: [],
    completedTopics: []
  },
  {
    code: "COEG304",
    title: "Instrumentation & Control",
    examDate: "2025-07-24",
    topics: ["Control System Introduction", "Mathematical Modeling", "Laplace Transform and Transfer Functions", "Time Response Analysis", "Feedback Characteristics", "Stability Analysis (Time Domain)", "Frequency Response Analysis", "Design of Linear Control Systems", "State Space Analysis"],
    customTopics: [],
    notes: [],
    flashcards: [],
    quickRevisions: [],
    completedTopics: []
  },
  {
    code: "MGTS301",
    title: "Engineering Economics",
    examDate: "2025-07-28",
    topics: ["Fundamentals of Engineering Economy", "Cost Concepts and Design Economics", "Time Value of Money", "Economic Profitability Evaluation Methods", "Depreciation", "Replacement Analysis", "Benefit-Cost Ratio Method", "Project Risk and Uncertainty"],
    customTopics: [],
    notes: [],
    flashcards: [],
    quickRevisions: [],
    completedTopics: []
  },
  {
    code: "MEEG315",
    title: "Machine Element Design & Processes",
    examDate: "2025-08-01",
    topics: ["Introduction to Design Process", "Conceptualization and Feasibility Studies", "Problem Solving and Decision Making", "Working Stresses and Fatigue", "Riveted, Screw Threaded and Welded Connections", "Mechanical Springs Design", "Rolling Contact Bearings", "Lubrication and Journal Bearings"],
    customTopics: [],
    notes: [],
    flashcards: [],
    quickRevisions: [],
    completedTopics: []
  }
];

// Context and reducer for state management
const StudyContext = createContext();

const studyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_COURSE':
      return { ...state, activeCourse: action.payload };
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    case 'ADD_TOPIC':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, customTopics: [...course.customTopics, action.payload] }
            : course
        )
      };
    case 'TOGGLE_TOPIC':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? {
                ...course,
                completedTopics: course.completedTopics.includes(action.payload)
                  ? course.completedTopics.filter(t => t !== action.payload)
                  : [...course.completedTopics, action.payload]
              }
            : course
        )
      };
    case 'ADD_NOTE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, notes: [...course.notes, action.payload] }
            : course
        )
      };
    case 'UPDATE_NOTE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? {
                ...course,
                notes: course.notes.map(note =>
                  note.id === action.payload.id ? action.payload : note
                )
              }
            : course
        )
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, notes: course.notes.filter(note => note.id !== action.payload) }
            : course
        )
      };
    case 'ADD_FLASHCARD':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, flashcards: [...course.flashcards, action.payload] }
            : course
        )
      };
    case 'DELETE_FLASHCARD':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, flashcards: course.flashcards.filter(card => card.id !== action.payload) }
            : course
        )
      };
    case 'ADD_QUICK_REVISION':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, quickRevisions: [...course.quickRevisions, action.payload] }
            : course
        )
      };
    case 'DELETE_QUICK_REVISION':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.code === action.courseCode
            ? { ...course, quickRevisions: course.quickRevisions.filter(rev => rev.id !== action.payload) }
            : course
        )
      };
    case 'ADD_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.payload]
      };
    default:
      return state;
  }
};

// Helper function to calculate days remaining
const getDaysRemaining = (examDate) => {
  const today = new Date();
  const exam = new Date(examDate);
  const timeDiff = exam.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

// Generate unique ID
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// Header component
const Header = ({ onAddCourse }) => {
  return (
    <header className="header">
      <h1 className="header__title">Study Master</h1>
      <button className="btn btn--primary" onClick={onAddCourse}>
        + Add Course
      </button>
    </header>
  );
};

// Sidebar component
const Sidebar = ({ courses, activeCourse, onCourseSelect }) => {
  const getProgress = (course) => {
    const totalTopics = course.topics.length + course.customTopics.length;
    if (totalTopics === 0) return 0;
    return (course.completedTopics.length / totalTopics) * 100;
  };

  return (
    <aside className="sidebar">
      {courses.map(course => (
        <div
          key={course.code}
          className={`sidebar__course ${activeCourse === course.code ? 'active' : ''}`}
          onClick={() => onCourseSelect(course.code)}
        >
          <div className="course__title">{course.code}</div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            {course.title}
          </div>
          <div className="days-badge">
            {getDaysRemaining(course.examDate)} days left
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${getProgress(course)}%` }}></div>
          </div>
        </div>
      ))}
    </aside>
  );
};

// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

// Topics tab component
const TopicsTab = ({ course, dispatch }) => {
  const [newTopic, setNewTopic] = useState('');

  const allTopics = [...course.topics, ...course.customTopics];

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      dispatch({ type: 'ADD_TOPIC', courseCode: course.code, payload: newTopic.trim() });
      setNewTopic('');
    }
  };

  const handleTopicToggle = (topic) => {
    dispatch({ type: 'TOGGLE_TOPIC', courseCode: course.code, payload: topic });
  };

  return (
    <div>
      <div className="form-group">
        <div className="flex gap-8">
          <input
            type="text"
            className="form-control"
            placeholder="Add new topic..."
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTopic()}
          />
          <button className="btn btn--primary" onClick={handleAddTopic}>
            Add Topic
          </button>
        </div>
      </div>
      
      <div className="topics-grid">
        {allTopics.map((topic, index) => (
          <div key={index} className="topic-item">
            <input
              type="checkbox"
              checked={course.completedTopics.includes(topic)}
              onChange={() => handleTopicToggle(topic)}
            />
            <span style={{ textDecoration: course.completedTopics.includes(topic) ? 'line-through' : 'none' }}>
              {topic}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Notes tab component
const NotesTab = ({ course, dispatch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleAddNote = () => {
    setEditingNote(null);
    setNoteTitle('');
    setNoteContent('');
    setModalOpen(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
    setModalOpen(true);
  };

  const handleSaveNote = () => {
    if (noteTitle.trim() && noteContent.trim()) {
      const noteData = {
        id: editingNote ? editingNote.id : generateId(),
        title: noteTitle.trim(),
        content: noteContent.trim(),
        timestamp: new Date().toISOString()
      };

      if (editingNote) {
        dispatch({ type: 'UPDATE_NOTE', courseCode: course.code, payload: noteData });
      } else {
        dispatch({ type: 'ADD_NOTE', courseCode: course.code, payload: noteData });
      }

      setModalOpen(false);
      setNoteTitle('');
      setNoteContent('');
      setEditingNote(null);
    }
  };

  const handleDeleteNote = (noteId) => {
    dispatch({ type: 'DELETE_NOTE', courseCode: course.code, payload: noteId });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h3>Notes ({course.notes.length})</h3>
        <button className="btn btn--primary" onClick={handleAddNote}>
          + Add Note
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {course.notes.map(note => (
          <div key={note.id} className="note-item">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 style={{ margin: 0 }}>{note.title}</h4>
                <p style={{ margin: '4px 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                  {new Date(note.timestamp).toLocaleDateString()}
                </p>
                <p style={{ margin: '8px 0 0 0' }}>{note.content.substring(0, 120)}...</p>
              </div>
              <div className="flex gap-4">
                <button className="btn btn--sm btn--outline" onClick={() => handleEditNote(note)}>
                  Edit
                </button>
                <button className="btn btn--sm btn--outline" onClick={() => handleDeleteNote(note.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>{editingNote ? 'Edit Note' : 'Add Note'}</h3>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows="6"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-8 justify-end">
          <button className="btn btn--outline" onClick={() => setModalOpen(false)}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={handleSaveNote}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Flashcards tab component
const FlashcardsTab = ({ course, dispatch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [studyMode, setStudyMode] = useState(false);
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleAddFlashcard = () => {
    setQuestion('');
    setAnswer('');
    setModalOpen(true);
  };

  const handleSaveFlashcard = () => {
    if (question.trim() && answer.trim()) {
      const flashcard = {
        id: generateId(),
        question: question.trim(),
        answer: answer.trim()
      };

      dispatch({ type: 'ADD_FLASHCARD', courseCode: course.code, payload: flashcard });
      setModalOpen(false);
      setQuestion('');
      setAnswer('');
    }
  };

  const handleDeleteFlashcard = (cardId) => {
    dispatch({ type: 'DELETE_FLASHCARD', courseCode: course.code, payload: cardId });
  };

  const handleFlipCard = (cardId) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(cardId)) {
      newFlipped.delete(cardId);
    } else {
      newFlipped.add(cardId);
    }
    setFlippedCards(newFlipped);
  };

  const shuffleCards = () => {
    // Reset flipped cards when entering study mode
    setFlippedCards(new Set());
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h3>Flashcards ({course.flashcards.length})</h3>
        <div className="flex gap-8">
          <button 
            className={`btn ${studyMode ? 'btn--outline' : 'btn--secondary'}`}
            onClick={() => { setStudyMode(!studyMode); shuffleCards(); }}
          >
            {studyMode ? 'Exit Study Mode' : 'Study Mode'}
          </button>
          <button className="btn btn--primary" onClick={handleAddFlashcard}>
            + Add Flashcard
          </button>
        </div>
      </div>

      <div className="flashcards-container">
        {course.flashcards.map(card => (
          <div key={card.id} className="flashcard">
            <div 
              className={`card-inner ${flippedCards.has(card.id) ? 'flipped' : ''}`}
              onClick={() => handleFlipCard(card.id)}
            >
              <div className="card-face">
                <div style={{ textAlign: 'center' }}>
                  <strong>Q:</strong> {card.question}
                </div>
              </div>
              <div className="card-face back">
                <div style={{ textAlign: 'center' }}>
                  <strong>A:</strong> {card.answer}
                </div>
              </div>
            </div>
            {!studyMode && (
              <div className="flex justify-center mt-8">
                <button 
                  className="btn btn--sm btn--outline"
                  onClick={(e) => { e.stopPropagation(); handleDeleteFlashcard(card.id); }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>Add Flashcard</h3>
        <div className="form-group">
          <label className="form-label">Question</label>
          <textarea
            className="form-control"
            rows="3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Answer</label>
          <textarea
            className="form-control"
            rows="3"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-8 justify-end">
          <button className="btn btn--outline" onClick={() => setModalOpen(false)}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={handleSaveFlashcard}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Quick Revision tab component
const QuickRevisionTab = ({ course, dispatch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [expandedRevisions, setExpandedRevisions] = useState(new Set());

  const handleAddRevision = () => {
    setTitle('');
    setContent('');
    setModalOpen(true);
  };

  const handleSaveRevision = () => {
    if (title.trim() && content.trim()) {
      const revision = {
        id: generateId(),
        title: title.trim(),
        bullets: content.trim().split('\n').filter(line => line.trim())
      };

      dispatch({ type: 'ADD_QUICK_REVISION', courseCode: course.code, payload: revision });
      setModalOpen(false);
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteRevision = (revisionId) => {
    dispatch({ type: 'DELETE_QUICK_REVISION', courseCode: course.code, payload: revisionId });
  };

  const toggleRevision = (revisionId) => {
    const newExpanded = new Set(expandedRevisions);
    if (newExpanded.has(revisionId)) {
      newExpanded.delete(revisionId);
    } else {
      newExpanded.add(revisionId);
    }
    setExpandedRevisions(newExpanded);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h3>Quick Revisions ({course.quickRevisions.length})</h3>
        <button className="btn btn--primary" onClick={handleAddRevision}>
          + Add Revision
        </button>
      </div>

      <div>
        {course.quickRevisions.map(revision => (
          <div key={revision.id} className="revision-item">
            <div className="flex justify-between items-start">
              <div 
                className="revision-title flex-1"
                onClick={() => toggleRevision(revision.id)}
              >
                {revision.title}
              </div>
              <button 
                className="btn btn--sm btn--outline"
                onClick={() => handleDeleteRevision(revision.id)}
              >
                Delete
              </button>
            </div>
            {expandedRevisions.has(revision.id) && (
              <div className="revision-bullets">
                <ul>
                  {revision.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>Add Quick Revision</h3>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Content (one bullet point per line)</label>
          <textarea
            className="form-control"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter each bullet point on a new line..."
          ></textarea>
        </div>
        <div className="flex gap-8 justify-end">
          <button className="btn btn--outline" onClick={() => setModalOpen(false)}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={handleSaveRevision}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Main app component
const App = () => {
  const [state, dispatch] = useReducer(studyReducer, {
    courses: initialCourses,
    activeCourse: initialCourses[0].code,
    activeTab: 'topics'
  });

  const [addCourseModalOpen, setAddCourseModalOpen] = useState(false);
  const [newCourseCode, setNewCourseCode] = useState('');
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseDate, setNewCourseDate] = useState('');

  const activeCourseData = state.courses.find(c => c.code === state.activeCourse);

  const handleAddCourse = () => {
    if (newCourseCode.trim() && newCourseTitle.trim() && newCourseDate) {
      const course = {
        code: newCourseCode.trim(),
        title: newCourseTitle.trim(),
        examDate: newCourseDate,
        topics: [],
        customTopics: [],
        notes: [],
        flashcards: [],
        quickRevisions: [],
        completedTopics: []
      };

      dispatch({ type: 'ADD_COURSE', payload: course });
      setAddCourseModalOpen(false);
      setNewCourseCode('');
      setNewCourseTitle('');
      setNewCourseDate('');
    }
  };

  const renderTabContent = () => {
    switch (state.activeTab) {
      case 'topics':
        return <TopicsTab course={activeCourseData} dispatch={dispatch} />;
      case 'notes':
        return <NotesTab course={activeCourseData} dispatch={dispatch} />;
      case 'flashcards':
        return <FlashcardsTab course={activeCourseData} dispatch={dispatch} />;
      case 'quickRevision':
        return <QuickRevisionTab course={activeCourseData} dispatch={dispatch} />;
      default:
        return null;
    }
  };

  return (
    <StudyContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header onAddCourse={() => setAddCourseModalOpen(true)} />
        
        <div className="layout">
          <Sidebar 
            courses={state.courses}
            activeCourse={state.activeCourse}
            onCourseSelect={(code) => dispatch({ type: 'SET_ACTIVE_COURSE', payload: code })}
          />

          <main className="main">
            {/* Mobile course selector */}
            <div className="mobile-sidebar-select">
              <select 
                className="form-control course-select"
                value={state.activeCourse}
                onChange={(e) => dispatch({ type: 'SET_ACTIVE_COURSE', payload: e.target.value })}
              >
                {state.courses.map(course => (
                  <option key={course.code} value={course.code}>
                    {course.code} - {course.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <div 
                className={`tab ${state.activeTab === 'topics' ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'topics' })}
              >
                Topics
              </div>
              <div 
                className={`tab ${state.activeTab === 'notes' ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'notes' })}
              >
                Notes
              </div>
              <div 
                className={`tab ${state.activeTab === 'flashcards' ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'flashcards' })}
              >
                Flashcards
              </div>
              <div 
                className={`tab ${state.activeTab === 'quickRevision' ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'SET_ACTIVE_TAB', payload: 'quickRevision' })}
              >
                Quick Revision
              </div>
            </div>

            {/* Tab content */}
            {renderTabContent()}
          </main>
        </div>

        {/* Add Course Modal */}
        <Modal isOpen={addCourseModalOpen} onClose={() => setAddCourseModalOpen(false)}>
          <h3>Add New Course</h3>
          <div className="form-group">
            <label className="form-label">Course Code</label>
            <input
              type="text"
              className="form-control"
              value={newCourseCode}
              onChange={(e) => setNewCourseCode(e.target.value)}
              placeholder="e.g., CS101"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              className="form-control"
              value={newCourseTitle}
              onChange={(e) => setNewCourseTitle(e.target.value)}
              placeholder="e.g., Introduction to Computer Science"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Exam Date</label>
            <input
              type="date"
              className="form-control"
              value={newCourseDate}
              onChange={(e) => setNewCourseDate(e.target.value)}
            />
          </div>
          <div className="flex gap-8 justify-end">
            <button className="btn btn--outline" onClick={() => setAddCourseModalOpen(false)}>
              Cancel
            </button>
            <button className="btn btn--primary" onClick={handleAddCourse}>
              Add Course
            </button>
          </div>
        </Modal>
      </div>
    </StudyContext.Provider>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));