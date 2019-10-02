/* 
  * Handle Changes in form data
  * I want to alter the values of tnu and tgp depending on changes in form data
  * Then recalculate the gpa and display it to a user
  * 
*/
let courseID = 1;

const $ = n => document.querySelector(n);
const $$ = n => document.querySelectorAll(n);
const log = n => console.log(n);
const qs = (n, elem) => n.querySelector(elem);

// const tnu = 0;
// const tgp = 0;
const activeCourses = {};

function calculateGPA() {
  const gradeVal = { a: 5, b: 4, c: 3, d: 2, f: 1 }
  let tnu = 0;
  let tgp = 0;
  log(Object.entries(activeCourses));
  (function isEmpty() {
    if (Object.entries(activeCourses).length === 0 && Object.constructor === Object) {
      $('.sem-gpa').textContent = '0.00';
    }
  })();

  Object.entries(activeCourses).forEach(([key, value]) => {
    //if (!activeCourses.hasOwnProperty(key)) {
    tnu += +value[0];
    tgp += (gradeVal[value[1].toLowerCase()] * +value[0]);
    //}
  });
  const gpa = (tgp / tnu).toFixed(2);
  $('.sem-gpa').textContent = gpa;
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
    const courseGrade = e.options[e.selectedIndex].value.toUpperCase();
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



function removeCourse() {
  this.addEventListener('click', e => {
    let a = Array.from((e.target.classList));
    if (a.includes('remove-course')) {
      let b = e.target.parentNode;
      $('.gpcont').removeChild(b);
      let c = qs(b, '.course-name').textContent;
      delete activeCourses[c];
      calculateGPA();
    };
  });
}
// this function would be a template that we can use to any thing with each single semester item.
function generateSemesterNode(){
  let semesterSection = document.createElement('section');
  semesterSection.classList.add('gpcont');
  semesterSection.innerHTML = `
    <div class="gpcont-header">
      <h3 class="semester">Semester <span class="semester-num"> ${courseID}</span></h3>
      <p class="remove-semester">
        &cross;
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
      <div onclick="removeCourse()" class="remove-course">
        &cross;
      </div>
    </div>


    <div class="gpcont-footer">
      <div class="semester-gp">
        <p>Semester&nbsp;<span class="semester-num">1&nbsp;</span>GPA:&nbsp;</p><span class="sem-gpa">0.00</span>
      </div>
      <button class="add-course">Add&nbsp;Course</button>
    </div>`;

  return semesterSection;
}
// adds a new semester to the listing.
function addSemester() {
  // increment the course id.
  courseID+=1;
  let clonedNode = generateSemesterNode();
  $('main').appendChild(clonedNode);
  log("appended");
}

$$('.add-semester').forEach(button => button.onclick = addSemester);

$('.add-course').onclick = addCourse;