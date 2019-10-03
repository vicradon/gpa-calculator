/* 
  * Handle Changes in form data
  * I want to alter the values of tnu and tgp depending on changes in form data
  * Then recalculate the gpa and display it to a user
  * 
*/


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


function addSemester() {
  let table = document.createDocumentFragment();
  (function tableCreator() {
    let clonedTemplate = $('.gpcont').cloneNode(true);
    clonedTemplate.querySelector('.gpitem').reset();
    table.appendChild(clonedTemplate);
  })();
  let semesterTable = table;
  $('main').appendChild(semesterTable);
  log("appended")
}

$$('.add-semester').forEach(button => button.onclick = addSemester);

$('.add-course').onclick = addCourse;