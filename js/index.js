const store = Redux.createStore(semesterReducer);

function semesterTemplate(name, id, parentID, level, courses, gpa, form) {
  const a = (id, name, grade, units) => `<div data-id = ${id} class="row">
  <p class="cell" data-title="Course Name">${name}</p>
  <p class="cell" data-title="Grade">${grade}</p>
  <p class="cell" data-title="Units">${units}</p>
  <p class="cell" data-title="Actions">
    <i class="material-icons table-edit-action">edit</i>
    <i class="material-icons table-delete-action">delete</i>
  </p>
</div>`
  coursesMarkup = '';
  (function () {
    courses.forEach(item => coursesMarkup += a(item.id, item.name, item.grade, item.units))
  })();
  return `
  <section data-parentID = ${parentID} data-id = ${id} class="semester-card">

      <div class="semester-details">
        <p contenteditable="true" class="semester-name">${name}</p>
        <p contenteditable="true" class="year-of-study">${level}</p>
      </div>

      <form class="semester-form">

        <div class="input-select">


          <input 
            id="semester-form-course" 
            type="text" name="course" 
            class="semester-form-input"
            placeholder="Course Name"
            value = ${form.name} 
          >

          <select name="grade-select" id = "grade-select">
            <option selected disabled value = ${form.grade}>Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>

          <input 
            id="semester-form-credits" 
            type="number" 
            min = "1" 
            name="credits" 
            class="semester-form-input"
            placeholder="Credits"
            value = ${form.units}
          >
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

          ${coursesMarkup}
          
        </div>
        <div class="semester-actions">
          <p class="semester-info">GPA: <span class="semester-gpa">${gpa}</span> </p>
          <p><i class="material-icons add-semester-to-list">add_circle_outline</i></p>
        </div>
      </div>
    </section>
  `
}

function render() {
  const currentLevel = store.getState().currentLevel;
  let a = '';
  currentLevel.forEach(item => a += semesterTemplate(
    item.name, 
    item.id, 
    item.parentID, 
    item.level, 
    item.courses, 
    item.gpa, 
    item.form
  ));
  main.innerHTML = a;
}
render();
store.subscribe(render);