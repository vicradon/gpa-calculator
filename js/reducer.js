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
  let tnu_arr1 = courses.map(x => x.units);
  let tgp_arr1 = courses.map(x => gtv(x.grade) * x.units);

  let tnu = '';
  let tgp = '';
  let gpa = '';

  if (tnu_arr1.length && tgp_arr1.length) {
    tnu = tnu_arr1.reduce((x, y) => x + y)
    tgp = tgp_arr1.reduce((x, y) => x + y);
    gpa = +(tgp / tnu).toFixed(2);
  }
  else {
    tnu = ''
    tgp = ''
    gpa = ''
  }
  return [tnu, tgp, gpa];
}


function handlePosition(state, updatedSemester, otherSemester, action) {
  if (updatedSemester.id < otherSemester.id) {
    return {
      ...state,
      [+action.payload.yearID]: [updatedSemester, otherSemester]
    }
  }
  else {
    return {
      ...state,
      [+action.payload.yearID]: [otherSemester, updatedSemester]
    }
  }
}
function getCnS(state, action) {
  const semester = state[action.payload.yearID].filter(item => item.id === +action.payload.semesterID)[0];
  const course = semester.courses.filter(course => course.id === +action.payload.courseID)[0];

  return { semester: semester, course: course }
}

function handleAdd(state, action) {
  const { semester, course } = getCnS(state, action);
  let newID = 4;
  if (semester.courses.length > 0) {
    newID = semester.courses[semester.courses.length - 1].id + 1;
  }
  else {
    newID = 1
  }
  const { name, grade, units } = action.payload.newCourse
  const newCourse = { id: newID, name: name, grade: grade, units: +units }

  const newCourses = [...semester.courses, newCourse];
  const [tnu, tgp, gpa] = updateDetails(newCourses);
  const updatedSemester = { ...semester, tnu: tnu, tgp: tgp, gpa: gpa, courses: newCourses }
  const otherSemester = state[action.payload.yearID].filter(item => item.id !== +action.payload.semesterID)[0];

  return {
    semester: semester,
    course: course,
    updatedSemester: updatedSemester,
    otherSemester: otherSemester
  }
}
function handleAddLevel(state, action){
  const { semester, course } = getCnS(state, action);
  let levels = Object.keys(state).map(x => +x).filter(x => x / 1 === x);
  let newID = 0;
  if (levels.length > 0) {
    newID = level[level.length -1] + 1;
  }
  else {
    newID = 1
  }
  return newID;
}
function handleNewLevel(newID){
  return [
    {
      name: 'Enter Semester name',
      id: 1,
      parentID: newID,
      level: 'Enter level',
      courses: [ ],
      form: {
        name: '',
        grade: '',
        units: ''
      },
      tnu: '',
      tgp: '',
      gpa: ''
    },
    {
      name: 'Enter Semester name',
      id: 2,
      parentID: newID,
      level: 'Enter level',
      courses: [],
      form: {
        name: '',
        grade: '',
        units: ''
      },
      tnu: '',
      tgp: '',
      gpa: ''
    }
  ]
}

function handleEditDelete(state, action) {
  const { semester, course } = getCnS(state, action);
  [name, grade, units] = [course.name, course.grade, course.units];

  const updatedCourses = semester.courses.filter(course => course.id !== +action.payload.courseID);

  const [tnu, tgp, gpa] = updateDetails(updatedCourses);

  const updatedSemester_e = {
    ...semester,
    tnu: tnu,
    tgp: tgp,
    gpa: gpa,
    form: { name: name, grade: grade, units: units },
    courses: updatedCourses
  }
  const updatedSemester_d = {
    ...updatedSemester_e,
    form: {
      name: '', 
      grade: '', 
      units: ''
    }
  }
  const otherSemester = state[action.payload.yearID].filter(item => item.id !== +action.payload.semesterID)[0];
  return {
    updatedSemester_e: updatedSemester_e,
    updatedSemester_d: updatedSemester_d,
    otherSemester: otherSemester
  }
}
function currentLevelFunc(levelID){
  currentLevel.textContent = `Year ${levelID}`;
}

function semesterReducer(state = semesterState, action) {
  switch (action.type) {
    case 'DISPLAY_LEVEL':
      currentLevelFunc(action.id)
      return {
        ...state,
        currentLevel: state[action.id]
      }

    case 'ADD_NEW_COURSE':
      return handlePosition(
        state,
        handleAdd(state, action).updatedSemester,
        handleAdd(state, action).otherSemester,
        action
      )

    case 'UPDATE_CURRENT_LEVEL':
      const id = state.currentLevelId;
      return {
        ...state,
        currentLevel: state[id]
      }
    case 'EDIT_COURSE':
      return handlePosition(
        state,
        handleEditDelete(state, action).updatedSemester_e,
        handleEditDelete(state, action).otherSemester,
        action
      )
    case 'DELETE_COURSE':
      return handlePosition(
        state,
        handleEditDelete(state, action).updatedSemester_d,
        handleEditDelete(state, action).otherSemester,
        action
      )
    case 'ADD_LEVEL':
      let id_a = handleAddLevel(state, action);
      let lev_a = handleNewLevel(id_a)
      return {
        ...state,
        id_a:lev_a
      }

    default:
      return state
  }
}