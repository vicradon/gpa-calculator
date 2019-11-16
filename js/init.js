const initialNodes = store.getState().currentLevel;

const initMarkUp = initialNodes.map(item => semesterTemplate(item.name, item.id, item.parentID, item.level, item.courses, item.gpa, item.form));

let initLevels = Object.keys(store.getState()).map(x => +x).filter(x => x / 1 === x)


function fillLevels(levArr) {
  let a = ''
  levArr.forEach(lev => a += `
  <div data-id = ${lev} class="level">
    <p>Year ${lev}</p>
    <p class="levels-actions">
      <i class="material-icons delete-level">delete</i>
    </p>
  </div>`);
  mainLevels.innerHTML = a;
}
fillLevels(initLevels);
currentLevelFunc(1);

(function () {
  let a = '';
  initMarkUp.forEach(elem => a += elem);
  main.innerHTML = a;
})();