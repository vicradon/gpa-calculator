const $ = n => document.querySelector(n);
const $$ = n => document.querySelectorAll(n);
const log = console.log;
const qs = (n, elem) => n.querySelector(elem);


$$('.reset-form').forEach(button => button.addEventListener("submit", e => {
  alert(e)
  e.preventDefault();
}))
// $$('.add-course').forEach(button => )