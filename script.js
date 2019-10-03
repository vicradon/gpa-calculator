/* 
  * Seclude the each semster.
  * Make the code run for each individual semester
  * A function called controller would track the current number of semesters and label each one accordingly.
  * Another function would calculate the cgpa
  * Yet, another function would deal with semester deletitions 
*/
let courseID = 1;

const $ = n => document.querySelector(n);
const $$ = n => document.querySelectorAll(n);
const log = n => console.log(n);
const qs = (n, elem) => n.querySelector(elem);

const activeCourses = {};

function calculateGPA() {
  const gradeVal = { a: 5, b: 4, c: 3, d: 2, f: 1, notSelected: 0 }
  let tnu = 0;
  let tgp = 0;
  
  // if there is no course selected
  if (Object.entries(activeCourses).length === 0) {
    $('.sem-gpa').textContent = '0.00';
    return;
  }

  Object.values(activeCourses).forEach((creditGradePair) => {
    //if (!activeCourses.hasOwnProperty(key)) {
    const [credit, grade] = [+creditGradePair[0], creditGradePair[1].toLowerCase()];
    tnu += credit;
    tgp +=
      (grade !== '--'
        ? gradeVal[grade]
        : gradeVal['notSelected']) * credit;
    //}
  });
  const gpa = (tgp / tnu).toFixed(2);
  $('.sem-gpa').textContent = gpa;
  log(this)
  //this.querySelector('.sem-gpa').textContent = gpa;
}

function validateForm() {
  $('#course').value = $('#course').value.trim();
  $('#credits').value = $('#credits').value.trim();

  if ($('#course').value && $('#credits').value && $('.grade-select').options[$('.grade-select').selectedIndex].value) {
    return true
  }
}

function addCourse() {
  if (validateForm()) {
    const e = $('.grade-select');
    const courseName = $('#course').value;
    const courseCredits = $('#credits').value;

    const selectedGrade = e.options[e.selectedIndex].value;
    const courseGrade = selectedGrade !== '--'?  selectedGrade.toUpperCase(): '--';
    let clonedTemplate = $('#course-table').cloneNode(true);
    clonedTemplate.style.display = 'flex';
    activeCourses[courseName] = [courseCredits, courseGrade];
    //log(activeCourses)

    qs(clonedTemplate, '.course-name').textContent = courseName;
    qs(clonedTemplate, '.course-grade').textContent = courseGrade;
    qs(clonedTemplate, '.course-credits').textContent = courseCredits;

    $('.gpitem').reset();
    calculateGPA();
    $('.gpcont').appendChild(clonedTemplate);
  }
}



function removeCourse({ target }) {
  if (target.classList.contains('remove-course')) {
    const parent = target.parentNode;
    const gpCount = $('.gpcont');

    if(parent.contains(parent)){
      gpCount.removeChild(parent);
    }
    const courseName = qs(parent, '.course-name').textContent;
    delete activeCourses[courseName];
    calculateGPA();
  };
}

let semesterTracker = [1, 2, 3, 4, 5];


function updateSemester(which) {
  let a = semesterTracker.splice(which - 1, 1);
  for (let i = a - 1; i < semesterTracker.length; i++) {
    semesterTracker[i] = semesterTracker[i] - 1;
  }
}

function removeSemester() {
  this.addEventListener('click', e => {
    let a = Array.from((e.target.classList));
    if (a.includes('remove-semester')) {
      let b = e.target.parentNode.parentNode;
      $('main').removeChild(b);
    };
  });
}


let sem = 2;
function addSemester() {
  if (sem <= semesterTracker[semesterTracker.length - 1]) {
    const semester = `<section class="gpcont">
    <div class="gpcont-header">
      <h3 class="semester">Semester <span class="semester-num">${semesterTracker[sem-1]}</span></h3>
      <p onclick="removeSemester()" class="remove-semester">
        ✗
      </p>
    </div>
    <div class="gptable">
      <form class="gpitem">
        <p>
          <input id="course" type="text" name="course" class="gpa-item-input" placeholder="Course Name">
        </p>

        <p>
          <select name="grade-select" class="grade-select">
            <option value="--">Select Grade</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="f">F</option>
          </select>
        </p>
        <p>
          <input id="credits" type="number" name="credits" class="gpa-item-input" placeholder="Credits">
        </p>

      </form>
    </div>

    <div style="display: none" id="course-table" class="course-table">
      <div class="course-table-items">
        <p class="course-name"></p>
        <p class="course-grade"></p>
        <p class="course-credits"></p>
      </div>
      <div onclick="removeCourse(event)" class="remove-course">
        ✗
      </div>
    </div>


    <div class="gpcont-footer">
      <div class="semester-gp">
        <p>Semester&nbsp;<span class="semester-num">1&nbsp;</span>GPA:&nbsp;</p><span class="sem-gpa">0.00</span>
      </div>
      <button class="add-course">Add&nbsp;Course</button>
    </div>

    </section>`;
    let lastSemester = semesterTracker[semesterTracker.length - 1];
    currentSemester = lastSemester + 1;
    semesterTracker.push();
    $('main').insertAdjacentHTML('beforeend', semester)
    sem += 1;
  }
}

$$('.add-semester').forEach(button => button.onclick = addSemester);

$('.add-course').onclick = addCourse;