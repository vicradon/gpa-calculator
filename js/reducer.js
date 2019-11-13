const semesterState = {
  one: [{
    name: 'year 1 first semester',
    id: 1,
    level: '',
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
    id: 1,
    level: '',
    courses: [
      { id: 1, name: 'MTH 102', grade: 'A', units: 4 },
      { id: 1, name: 'CHM 102', grade: 'B', units: 4 },
      { id: 1, name: 'PHY 102', grade: 'C', units: 4 },
    ],
    tnu: '',
    tgp: '',
    gpa: ''
  }],
  two: [{
    name: 'year 2 first semester',
    id: 1,
    level: '',
    courses: [
      { id: 1, name: 'MTH 201', grade: 'A', units: 4 }
    ],
    tnu: '',
    tgp: '',
    gpa: ''
  },
  {
    name: 'year 2 second semester',
    id: 1,
    level: '',
    courses: [
      { id: 1, name: 'MTH 202', grade: 'A', units: 4 }
    ],
    tnu: '',
    tgp: '',
    gpa: ''
  }]
}

function semesterReducer(state = semesterState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.value
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count + action.payload.value
      }
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload.color
      }
    case 'HANDLE_CHANGE':
      return {
        ...state,
        text: action.payload.value
      }
    default:
      return state
  }
}