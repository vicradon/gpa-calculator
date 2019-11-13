const store = Redux.createStore(semesterReducer);

const coursesTemplate = (courses) => {
  const courseArr = courses.map(course => 
  `
    <div dataid = ${course.id} class="row">
    <p class="cell" data-title="Course Name">${course.name}</p>
    <p class="cell" data-title="Grade">${course.grade}</p>
    <p class="cell" data-title="Units">${course.units}</p>
    <p class="cell" data-title="Actions">
      <i class="material-icons table-edit-action">edit</i>
      <i class="material-icons table-delete-action">delete</i>
    </p>
    </div>
  `)
  return courseArr;
}



function semesterTemplate(name, id, level, courses) {
  `
  <section data-id = ${id} class="semester-card">

      <div class="semester-details">
        <p contenteditable="true" class="semester-name">${name}</p>
        <p class="year-of-study">${level}</p>
      </div>

      <form class="semester-form">

        <div class="input-select">


          <input id="semester-form-course" type="text" name="course" class="semester-form-input"
            placeholder="Course Name">

          <select name="grade-select" class="grade-select">
            <option value="--">Select Grade</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="f">F</option>
          </select>

          <input id="semester-form-credits" type="text" name="credits" class="semester-form-input"
            placeholder="Credits">
        </div>

        <div class="form-actions">
          <button class="reset-form">Reset</button>
          <button class="add-course">Add</button>
        </div>

      </form>

      <div class="semester-grades">
        <div class="table">

          <div class="row header">
            <p class="cell">Course Name</p>
            <p class="cell">Grade</p>
            <p class="cell">Units</p>
            <p class="cell">Actions</p>
          </div>

          <div class="row">
            <p class="cell" data-title="Course Name">ENG 224</p>
            <p class="cell" data-title="Grade">A</p>
            <p class="cell" data-title="Units">2</p>
            <p class="cell" data-title="Actions">
              <i class="material-icons table-edit-action">edit</i>
              <i class="material-icons table-delete-action">delete</i>
            </p>
          </div>
          <div class="row">
            <p class="cell" data-title="Course Name">ENG 208</p>
            <p class="cell" data-title="Grade">A</p>
            <p class="cell" data-title="Units">2</p>
            <p class="cell" data-title="Actions">
              <i class="material-icons table-edit-action">edit</i>
              <i class="material-icons table-delete-action">delete</i>
            </p>
          </div>

        </div>
        <div class="semester-actions">
          <p class="semester-info">GPA: <span class="semester-gpa">5.0</span> </p>
          <p><i class="material-icons add-semester-to-list">add_circle_outline</i></p>
        </div>
      </div>
    </section>
  `
}


function render() {
  const semesterNodes = store.getState().ma
  main.innerHTML;
}
render();
store.subscribe(render)