const initialNodes = store.getState().currentLevel;

const initMarkUp = initialNodes.map(item => semesterTemplate(item.name, item.id, item.parentID, item.level, item.courses, item.gpa, item.form));

(function () {
  let a = '';
  initMarkUp.forEach(elem => a += elem);
  main.innerHTML = a;
})();