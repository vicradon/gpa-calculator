const log = console.log
const $ = n => document.querySelector(n);
const ace = (n, func) => n.addEventListener('click', func); 


const nodes = {
  main:$('main'),
  yearsMenu:$('.years-menu'),
  yearsPop:$('.years-popup')
}

const { main, yearsMenu, yearsPop } = nodes;