const actions = {
  increment: {
    type: 'INCREMENT',
    payload: { value: 1 }
  },
  decrement: {
    type: 'DECREMENT',
    payload: { value: -1 }
  },
  changeColor(color) {
    return {
      type: 'CHANGE_COLOR',
      payload: { color: color }
    }
  },
  handleChange({target}) {
    return {
      type: 'HANDLE_CHANGE',
      payload: { value: target.value }
    }
  }
}
/*
const actions = {
  addNewSemester(context, payload){
    context.commit('mutation', payload)
  },
  addNewCourse(context, payload){
    context.commit('mutation', payload)
  },
  resetForm(context, payload){
    context.commit('mutation', payload)
  },
  editCourse(context, payload){
    context.commit('mutation', payload)
  },
  editSemester(context, payload){
    context.commit('mutation', payload)
  },
  openSettings(context, payload){
    context.commit('mutation', payload)
  },
  openSummary(context, payload){
    context.commit('mutation', payload)
  },
  openAbout(context, payload){
    context.commit('mutation', payload)
  },
  openDonate(context, payload){
    context.commit('mutation', payload)
  },
  openProfile(context, payload){
    context.commit('mutation', payload)
  }
}
export default actions;

*/