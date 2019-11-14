ace(yearsPop, getClickedLevel);
ace(main, handleClick);
const qs = (parentNode, childNode) => parentNode.querySelector(childNode);

function getClickedLevel({ target }) {
  const id = target.dataset.id;
  store.dispatch(displayLevel(id));
}

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('add-course')) {
    const semesterID = event.target.parentNode.parentNode.parentNode.dataset.id;
    const yearID = event.target.parentNode.parentNode.parentNode.dataset.parentid;
    const targetForm = event.target.parentNode.parentNode;

    const courseName = qs(targetForm, '#semester-form-course').value.trim();
    const courseGrade = qs(targetForm, '#grade-select').value;
    const courseUnits = qs(targetForm, '#semester-form-credits').value.trim();

    const newCourse = {
      name: courseName,
      grade: courseGrade,
      units: courseUnits
    }
    if (courseName && courseGrade && courseUnits) {
      store.dispatch(addNewCourse(semesterID, yearID, newCourse))
      targetForm.reset();
      store.dispatch(updateCurrentLevel());
    }
  }
  else if (event.target.classList.contains('reset-form')) {
    const targetForm = event.target.parentNode.parentNode;
    targetForm.reset();
  }

  else if (event.target.classList.contains('table-edit-action')) {
    const courseID = event.target.parentNode.parentNode.dataset.id;
    const semesterID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id;
    const yearID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.parentid;
    store.dispatch(editCourse(courseID, semesterID, yearID));
    store.dispatch(updateCurrentLevel());
  }
  else if (event.target.classList.contains('table-delete-action')) {
    const courseID = event.target.parentNode.parentNode.dataset.id;
    const semesterID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id;
    const yearID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.parentid;
    store.dispatch(deleteCourse(courseID, semesterID, yearID));
    store.dispatch(updateCurrentLevel());
  }
}