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

const tnu = 0;
const tgp = 0;

function calculateGPA() {
  const gpa = (tnu / tgp).toFixed(2);
}

// function submit() {
//   this.preventDefault();
//   const gradeVal = { a: 5, b: 4, c: 3, d: 2, f: 1 }
//   const e = this.querySelector('select');
//   const SelectedGradeVal = e.options[e.selectedIndex].value;
//   log(SelectedGradeVal)
// }

$$('.gpitem').forEach(form => {
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const gradeVal = { a: 5, b: 4, c: 3, d: 2, f: 1 }
    const e = form.querySelector('select');
    const SelectedGradeVal = e.options[e.selectedIndex].value;
    log(SelectedGradeVal)
  })
})

let table = document.createDocumentFragment();
(function tableCreator() {
  let clonedTemplate = $('.gpcont').cloneNode(true);
  table.appendChild(clonedTemplate);
})();
function addSemester(){
  let semesterTable = table;
  $('main').appendChild(semesterTable);
  log("appended")
}

$('.side-menu button').onclick = addSemester;