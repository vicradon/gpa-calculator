const displayLevel = id => {
  return {
    type: 'DISPLAY_LEVEL',
    id:id
  }
}


const addNewCourse = (semesterID, yearID, newCourse) => {
  return {
    type:'ADD_NEW_COURSE',
    payload:{
      semesterID:semesterID, 
      yearID:yearID,
      newCourse
    }
  }
}

const updateCurrentLevel = () => {
  return {
    type: 'UPDATE_CURRENT_LEVEL'
  }
}

const editCourse = (courseID, semesterID, yearID) => {
  return {
    type: 'EDIT_COURSE',
    payload: {
      courseID:courseID, 
      semesterID:semesterID, 
      yearID:yearID
    }
  }
}

const deleteCourse = (courseID, semesterID, yearID) => {
  return {
    type: 'DELETE_COURSE',
    payload: {
      courseID:courseID, 
      semesterID:semesterID, 
      yearID:yearID
    }
  }
}

const addLevel = () => {
  return {
    type:'ADD_LEVEL'
  }
}