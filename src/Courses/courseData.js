// === COURSE DATA WITH HARDCODED SYLLABUS ===
const courseData = [
  // ================== CBSE ==================
  // --- Class VII ---
  
  //Done
  {
    id: 'cbse-vii-physics',
    title: 'Physics',
    class: 'VII',
    board: 'CBSE',
    syllabus: ['Physical Quantities And Their Measurements', 'Motion', 'Energy', 'Light', 'Heat' , 'Sound', 'Electricity'],
  },
  {
    id: 'cbse-vii-chemistry',
    title: 'Chemistry',
    class: 'VII',
    board: 'CBSE',
    syllabus: ['Acids, Bases, and Salts', 'Physical and Chemical Changes', 'Elements and Compounds'],
  },
  {
    id: 'cbse-vii-biology',
    title: 'Biology',
    class: 'VII',
    board: 'CBSE',
    syllabus: ['Nutrition in Plants', 'Respiration in Organisms', 'Transportation in Animals and Plants'],
  },
  // Done
  {
    id: 'cbse-vii-maths',
    title: 'Mathematics',
    class: 'VII',
    board: 'CBSE',
    syllabus: ['Number System', 'Algebra', 'Arithmetics', 'Geometry', 'Mensuration', 'Statistics', 'Co-ordinate Geometry', 'Set Theory'],
  },
  {
    id: 'cbse-vii-compsci',
    title: 'Computer Science',
    class: 'VII',
    board: 'CBSE',
    syllabus: ['Algorithms Basics', 'Scratch Programming', 'MS Office Tools'],
  },

  // --- Class VIII ---
  {
    id: 'cbse-viii-physics',
    title: 'Physics',
    class: 'VIII',
    board: 'CBSE',
    syllabus: ['Force and Pressure', 'Friction', 'Sound', 'Electric Current'],
  },
  {
    id: 'cbse-viii-chemistry',
    title: 'Chemistry',
    class: 'VIII',
    board: 'CBSE',
    syllabus: ['Synthetic Fibres', 'Metals and Non-Metals', 'Coal and Petroleum'],
  },
  {
    id: 'cbse-viii-biology',
    title: 'Biology',
    class: 'VIII',
    board: 'CBSE',
    syllabus: ['Crop Production', 'Microorganisms', 'Reproduction in Animals'],
  },
  {
    id: 'cbse-viii-maths',
    title: 'Mathematics',
    class: 'VIII',
    board: 'CBSE',
    syllabus: ['Rational Numbers', 'Algebraic Expressions', 'Mensuration', 'Data Handling'],
  },
  {
    id: 'cbse-viii-compsci',
    title: 'Computer Science',
    class: 'VIII',
    board: 'CBSE',
    syllabus: ['Introduction to Python', 'Flowcharts', 'Cyber Safety'],
  },

  // --- Class IX ---
  {
    id: 'cbse-ix-physics',
    title: 'Physics',
    class: 'IX',
    board: 'CBSE',
    syllabus: ['Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy'],
  },
  {
    id: 'cbse-ix-chemistry',
    title: 'Chemistry',
    class: 'IX',
    board: 'CBSE',
    syllabus: ['Matter in Our Surroundings', 'Atoms and Molecules', 'Structure of Atom'],
  },
  {
    id: 'cbse-ix-biology',
    title: 'Biology',
    class: 'IX',
    board: 'CBSE',
    syllabus: ['Cell: Fundamental Unit of Life', 'Tissues', 'Diversity of Living Organisms'],
  },
  {
    id: 'cbse-ix-maths',
    title: 'Mathematics',
    class: 'IX',
    board: 'CBSE',
    syllabus: ['Polynomials', 'Coordinate Geometry', 'Surface Areas and Volumes', 'Statistics'],
  },
  {
    id: 'cbse-ix-compsci',
    title: 'Computer Science',
    class: 'IX',
    board: 'CBSE',
    syllabus: ['Python Basics', 'Control Structures', 'Problem Solving using Flowcharts'],
  },

  // --- Class X ---
  {
    id: 'cbse-x-physics',
    title: 'Physics',
    class: 'X',
    board: 'CBSE',
    syllabus: ['Light: Reflection and Refraction', 'Human Eye', 'Electricity', 'Magnetic Effects of Current'],
  },
  {
    id: 'cbse-x-chemistry',
    title: 'Chemistry',
    class: 'X',
    board: 'CBSE',
    syllabus: ['Chemical Reactions', 'Acids, Bases and Salts', 'Periodic Classification'],
  },
  {
    id: 'cbse-x-biology',
    title: 'Biology',
    class: 'X',
    board: 'CBSE',
    syllabus: ['Life Processes', 'Control and Coordination', 'How Do Organisms Reproduce?'],
  },
  {
    id: 'cbse-x-maths',
    title: 'Mathematics',
    class: 'X',
    board: 'CBSE',
    syllabus: ['Quadratic Equations', 'Trigonometry', 'Probability', 'Statistics'],
  },
  {
    id: 'cbse-x-compsci',
    title: 'Computer Science',
    class: 'X',
    board: 'CBSE',
    syllabus: ['Python Functions', 'File Handling', 'Database Concepts'],
  },

  // --- Class XI ---
  {
    id: 'cbse-xi-physics',
    title: 'Physics',
    class: 'XI',
    board: 'CBSE',
    syllabus: ['Physical World', 'Laws of Motion', 'Work, Power, Energy', 'Oscillations'],
  },
  {
    id: 'cbse-xi-chemistry',
    title: 'Chemistry',
    class: 'XI',
    board: 'CBSE',
    syllabus: ['Some Basic Concepts', 'Atomic Structure', 'Chemical Bonding', 'Thermodynamics'],
  },
  {
    id: 'cbse-xi-biology',
    title: 'Biology',
    class: 'XI',
    board: 'CBSE',
    syllabus: ['Plant Kingdom', 'Animal Kingdom', 'Biological Classification'],
  },
  {
    id: 'cbse-xi-maths',
    title: 'Mathematics',
    class: 'XI',
    board: 'CBSE',
    syllabus: ['Sets', 'Relations and Functions', 'Straight Lines', 'Limits'],
  },
  {
    id: 'cbse-xi-compsci',
    title: 'Computer Science',
    class: 'XI',
    board: 'CBSE',
    syllabus: ['Python Programming', 'Data Handling', 'Boolean Algebra'],
  },

  // --- Class XII ---
  {
    id: 'cbse-xii-physics',
    title: 'Physics',
    class: 'XII',
    board: 'CBSE',
    syllabus: ['Electrostatics', 'Current Electricity', 'Optics', 'Electromagnetic Induction'],
  },
  {
    id: 'cbse-xii-chemistry',
    title: 'Chemistry',
    class: 'XII',
    board: 'CBSE',
    syllabus: ['Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics'],
  },
  {
    id: 'cbse-xii-biology',
    title: 'Biology',
    class: 'XII',
    board: 'CBSE',
    syllabus: ['Reproduction', 'Genetics and Evolution', 'Human Health and Disease'],
  },
  {
    id: 'cbse-xii-maths',
    title: 'Mathematics',
    class: 'XII',
    board: 'CBSE',
    syllabus: ['Relations and Functions', 'Integrals', 'Vectors', 'Probability'],
  },
  {
    id: 'cbse-xii-compsci',
    title: 'Computer Science',
    class: 'XII',
    board: 'CBSE',
    syllabus: ['Python Classes and Objects', 'File Handling', 'Database Connectivity'],
  },

  // ================== ICSE ==================
  // --- Class VII ---
  {
    id: 'icse-vii-physics',
    title: 'Physics',
    class: 'VII',
    board: 'ICSE',
    syllabus: ['Force and Pressure', 'Heat', 'Sound', 'Energy Sources'],
  },
  {
    id: 'icse-vii-chemistry',
    title: 'Chemistry',
    class: 'VII',
    board: 'ICSE',
    syllabus: ['Matter and Its Composition', 'Acids and Bases', 'Air and Atmosphere'],
  },
  {
    id: 'icse-vii-biology',
    title: 'Biology',
    class: 'VII',
    board: 'ICSE',
    syllabus: ['Living and Non-Living Things', 'Cell Structure', 'Human Body Systems'],
  },
  {
    id: 'icse-vii-maths',
    title: 'Mathematics',
    class: 'VII',
    board: 'ICSE',
    syllabus: ['Integers', 'Rational Numbers', 'Mensuration', 'Simple Interest'],
  },
  {
    id: 'icse-vii-compsci',
    title: 'Computer Science',
    class: 'VII',
    board: 'ICSE',
    syllabus: ['Flowcharts', 'Logo Programming', 'Internet Basics'],
  },

  // --- Class VIII ---
  {
    id: 'icse-viii-physics',
    title: 'Physics',
    class: 'VIII',
    board: 'ICSE',
    syllabus: ['Friction', 'Sound', 'Pressure in Fluids', 'Electricity'],
  },
  {
    id: 'icse-viii-chemistry',
    title: 'Chemistry',
    class: 'VIII',
    board: 'ICSE',
    syllabus: ['Hydrogen', 'Water', 'Carbon and Its Compounds'],
  },
  {
    id: 'icse-viii-biology',
    title: 'Biology',
    class: 'VIII',
    board: 'ICSE',
    syllabus: ['Photosynthesis', 'Respiration', 'Reproduction in Animals'],
  },
  {
    id: 'icse-viii-maths',
    title: 'Mathematics',
    class: 'VIII',
    board: 'ICSE',
    syllabus: ['Algebra', 'Mensuration', 'Simple Equations', 'Data Handling'],
  },
  {
    id: 'icse-viii-compsci',
    title: 'Computer Science',
    class: 'VIII',
    board: 'ICSE',
    syllabus: ['QBasic Programming', 'Introduction to Databases', 'Internet Applications'],
  },

  // --- Class IX ---
  {
    id: 'icse-ix-physics',
    title: 'Physics',
    class: 'IX',
    board: 'ICSE',
    syllabus: ['Motion', 'Work and Energy', 'Fluids', 'Current Electricity'],
  },
  {
    id: 'icse-ix-chemistry',
    title: 'Chemistry',
    class: 'IX',
    board: 'ICSE',
    syllabus: ['Periodic Table', 'Chemical Bonding', 'Mole Concept'],
  },
  {
    id: 'icse-ix-biology',
    title: 'Biology',
    class: 'IX',
    board: 'ICSE',
    syllabus: ['Cell Division', 'Plant Physiology', 'Human Digestive System'],
  },
  {
    id: 'icse-ix-maths',
    title: 'Mathematics',
    class: 'IX',
    board: 'ICSE',
    syllabus: ['Mensuration', 'Statistics', 'Geometry Proofs', 'Trigonometry'],
  },
  {
    id: 'icse-ix-compsci',
    title: 'Computer Science',
    class: 'IX',
    board: 'ICSE',
    syllabus: ['Java Basics', 'Conditional Statements', 'Looping Constructs'],
  },

  // --- Class X ---
  {
    id: 'icse-x-physics',
    title: 'Physics',
    class: 'X',
    board: 'ICSE',
    syllabus: ['Force and Work', 'Electricity', 'Magnetism', 'Sound'],
  },
  {
    id: 'icse-x-chemistry',
    title: 'Chemistry',
    class: 'X',
    board: 'ICSE',
    syllabus: ['Acids, Bases and Salts', 'Metallurgy', 'Organic Chemistry'],
  },
  {
    id: 'icse-x-biology',
    title: 'Biology',
    class: 'X',
    board: 'ICSE',
    syllabus: ['Genetics', 'Evolution', 'Circulatory System'],
  },
  {
    id: 'icse-x-maths',
    title: 'Mathematics',
    class: 'X',
    board: 'ICSE',
    syllabus: ['Quadratic Equations', 'Trigonometric Identities', 'Probability'],
  },
  {
    id: 'icse-x-compsci',
    title: 'Computer Science',
    class: 'X',
    board: 'ICSE',
    syllabus: ['Java Classes and Objects', 'File Handling', 'Arrays'],
  },

  // --- Class XI ---
  {
    id: 'icse-xi-physics',
    title: 'Physics',
    class: 'XI',
    board: 'ICSE',
    syllabus: ['Units and Measurements', 'Laws of Motion', 'Gravitation', 'Oscillations'],
  },
  {
    id: 'icse-xi-chemistry',
    title: 'Chemistry',
    class: 'XI',
    board: 'ICSE',
    syllabus: ['Atomic Structure', 'Chemical Bonding', 'States of Matter'],
  },
  {
    id: 'icse-xi-biology',
    title: 'Biology',
    class: 'XI',
    board: 'ICSE',
    syllabus: ['Morphology of Plants', 'Structural Organisation in Animals', 'Cell Division'],
  },
  {
    id: 'icse-xi-maths',
    title: 'Mathematics',
    class: 'XI',
    board: 'ICSE',
    syllabus: ['Trigonometric Functions', 'Limits and Derivatives', 'Complex Numbers'],
  },
  {
    id: 'icse-xi-compsci',
    title: 'Computer Science',
    class: 'XI',
    board: 'ICSE',
    syllabus: ['Java Basics', 'Functions and Methods', 'Inheritance'],
  },

  // --- Class XII ---
  {
    id: 'icse-xii-physics',
    title: 'Physics',
    class: 'XII',
    board: 'ICSE',
    syllabus: ['Electrostatics', 'Current Electricity', 'Alternating Current', 'Electromagnetic Waves'],
  },
  {
    id: 'icse-xii-chemistry',
    title: 'Chemistry',
    class: 'XII',
    board: 'ICSE',
    syllabus: ['Solid State', 'Electrochemistry', 'Chemical Kinetics', 'Coordination Compounds'],
  },
  {
    id: 'icse-xii-biology',
    title: 'Biology',
    class: 'XII',
    board: 'ICSE',
    syllabus: ['Reproduction in Organisms', 'Genetics', 'Ecology'],
  },
  {
    id: 'icse-xii-maths',
    title: 'Mathematics',
    class: 'XII',
    board: 'ICSE',
    syllabus: ['Matrices', 'Determinants', 'Probability', 'Differential Equations'],
  },
  {
    id: 'icse-xii-compsci',
    title: 'Computer Science',
    class: 'XII',
    board: 'ICSE',
    syllabus: ['Java Advanced Concepts', 'File Handling', 'Database Connectivity'],
  },
];

export default courseData;
