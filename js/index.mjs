import Store from './beedle.mjs';
import { $, $$, log, qs, ace } from './util.mjs'
import actions from './actions.mjs'
import mutations from './mutations.mjs'


const initialState = {
  semesters:[
    {
      courses: [
        { name: "ENG 226", grade: "A", units: 3 },
        { name: "ENG 224", grade: "A", units: 2 },
        { name: "ENG 214", grade: "A", units: 2 }
      ]
    },

    {
      courses: [
        { name: "ENG 207", grade: "A", units: 2 },
        { name: "ENG 213", grade: "A", units: 2 },
        { name: "ENG 201", grade: "A", units: 1 }
      ]
    },

    {
      courses: [
        { name: "MTH 102", grade: "A", units: 3 },
        { name: "PHY 102", grade: "A", units: 3 },
        { name: "CHM 102", grade: "A", units: 3 }
      ]
    }
  ]
}


const store = new Store({actions, mutations, initialState})

