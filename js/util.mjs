const $ = n => document.querySelector(n);
const $$ = n => document.querySelectorAll(n);
const log = console.log;
const qs = (n, elem) => n.querySelector(elem);
const ace = (n, func) => n.addEventListener('click', func);





export {$, $$, log, qs, ace}