class Model{
  constructor(){
    this.semesters = [
      {
        courses:[
          {name:"ENG 226", grade:"A", units:3},
          {name:"ENG 224", grade:"A", units:2},
          {name:"ENG 214", grade:"A", units:2}
        ]
      },

      {
        courses:[
          {name:"ENG 207", grade:"A", units:2},
          {name:"ENG 213", grade:"A", units:2},
          {name:"ENG 201", grade:"A", units:1}
        ]
      },

      {
        courses:[
          {name:"MTH 102", grade:"A", units:3},
          {name:"PHY 102", grade:"A", units:3},
          {name:"CHM 102", grade:"A", units:3}
        ]
      },
    ]
  }
  addNewSemester(name, level, courses){
    const newSemester = {
      name:name,
      level:level,
      courses:[...courses]
    }
    this.semesters.push(newSemester)
  }
  editSemester(name){

  }
}


class View{
  constructor(){

  }
}


class Controller {
  constructor(model, view){
    this.model = model;
    this.view = view;
  }
}
// const app = new Controller(new Model(), new View())