const log = console.log
const $ = n => document.querySelector(n);
const ace = (n, func) => n.addEventListener('click', func);


const nodes = {
  main: $('main'),
  yearsMenu: $('.years-menu'),
  levels: $('.levels'),
  exposeLevels: $('#expose-levels'),
  levelsModal: $('.levels-modal'),
  closeLevelsButton: $('.close-levels-but'),
  mainLevels: $('.main-levels'),
  currentLevel:$('.current-level'),
  addLevelBut:$('.add-level-but')
}

const {
  main,
  yearsMenu,
  levels,
  exposeLevels,
  levelsModal,
  closeLevelsButton,
  mainLevels,
  currentLevel,
  addLevelBut
} = nodes;