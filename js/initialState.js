const semesterState = {
  1: [{
    name: 'year 1 first semester',
    id: 1,
    parentID: 1,
    level: 100,
    courses: [
      { id: 1, name: 'MTH 101', grade: 'A', units: 4 },
      { id: 2, name: 'ENG 103', grade: 'B', units: 1 },
      { id: 3, name: 'GST 101', grade: 'D', units: 2 },
    ],
    form: {
      name: '',
      grade: '',
      units: ''
    },
    tnu: 7,
    tgp: 28,
    gpa: 4
  },
  {
    name: 'year 1 second semester',
    id: 2,
    parentID: 1,
    level: 100,
    courses: [
      { id: 1, name: 'MTH 102', grade: 'A', units: 4 },
      { id: 2, name: 'CHM 102', grade: 'B', units: 4 },
      { id: 3, name: 'PHY 102', grade: 'C', units: 4 },
    ],
    form: {
      name: '',
      grade: '',
      units: ''
    },
    tnu: 12,
    tgp: 48,
    gpa: 4
  }],
  2: [{
    name: 'year 2 first semester',
    id: 1,
    parentID: 2,
    level: 200,
    courses: [
      { id: 1, name: 'MTH 201', grade: 'A', units: 4 }
    ],
    tnu: '',
    tgp: '',
    gpa: ''
  },
  {
    name: 'year 2 second semester',
    id: 2,
    parentID: 2,
    level: 200,
    courses: [
      { id: 1, name: 'MTH 202', grade: 'A', units: 4 }
    ],
    tnu: '',
    tgp: '',
    gpa: ''
  }],
  currentLevelId: 1,
  currentLevel: [
    {
      name: 'year 1 first semester',
      id: 1,
      parentID: 1,
      level: 100,
      courses: [
        { id: 1, name: 'MTH 101', grade: 'A', units: 4 },
        { id: 2, name: 'ENG 103', grade: 'B', units: 1 },
        { id: 3, name: 'GST 101', grade: 'D', units: 2 },
      ],
      form: {
        name: '',
        grade: '',
        units: ''
      },
      tnu: 7,
      tgp: 28,
      gpa: 4
    },
    {
      name: 'year 1 second semester',
      id: 2,
      parentID: 1,
      level: 100,
      courses: [
        { id: 1, name: 'MTH 102', grade: 'A', units: 4 },
        { id: 2, name: 'CHM 102', grade: 'B', units: 4 },
        { id: 3, name: 'PHY 102', grade: 'C', units: 4 },
      ],
      form: {
        name: '',
        grade: '',
        units: ''
      },
      tnu: 12,
      tgp: 48,
      gpa: 4
    }
  ]
}