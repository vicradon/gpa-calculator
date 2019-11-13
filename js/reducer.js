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
    tnu: '',
    tgp: '',
    gpa: ''
  },
  {
    name: 'year 1 second semester',
    id: 2,
    parentID: 1,
    level: 100,
    courses: [
      { id: 1, name: 'MTH 102', grade: 'A', units: 4 },
      { id: 1, name: 'CHM 102', grade: 'B', units: 4 },
      { id: 1, name: 'PHY 102', grade: 'C', units: 4 },
    ],
    tnu: '',
    tgp: '',
    gpa: ''
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
      tnu: 12,
      tgp: 44,
      gpa: 3.67
    }
  ]
}

function updateDetails(courses) {
  function gtv(grade) {
    switch (grade) {
      case 'A': return 5;
      case 'B': return 4;
      case 'C': return 3;
      case 'D': return 2;
      case 'F': return 0;
    }
  }
  let tnu = courses.map(x => x.units).reduce((x, y) => x + y)
  let tgp = courses.map(x => gtv(x.grade) * x.units).reduce((x, y) => x + y);
  let gpa = +(tgp / tnu).toFixed(2);
  return [tnu, tgp, gpa];
}

function semesterReducer(state = semesterState, action) {
  switch (action.type) {
    case 'DISPLAY_LEVEL':
      return {
        ...state,
        currentLevel: state[action.id]
      }

    case 'ADD_NEW_COURSE':
      const { semesterID, yearID, courseName, courseGrade, courseUnits } = action.payload;
      const semester = state[yearID].filter(item => item.id === +semesterID)[0]
      const newID = semester.courses[semester.courses.length - 1].id + 1;
      const newCourse = { id: newID, name: courseName, grade: courseGrade, units: +courseUnits }
      const [tnu, tgp, gpa] = updateDetails([...semester.courses, newCourse]);

      updatedSemester = { ...semester, tnu: tnu, tgp: tgp, gpa: gpa, courses: [...semester.courses, newCourse] }
      const otherSmester = state[yearID].filter(item => item.id !== +semesterID)[0];
      if (updatedSemester.id < otherSmester.id) {
        return {
          ...state,
          [+yearID]: [updatedSemester, otherSmester]
        }
      }
      else {
        return {
          ...state,
          [+yearID]: [otherSmester, updatedSemester]
        }
      }

    case 'UPDATE_CURRENT_LEVEL':
      const id = state.currentLevelId;
      return {
        ...state,
        currentLevel: state[id]
      }

    case 'EDIT_COURSE':

      log(action.payload.semesterID)

    default:
      return state
  }
}