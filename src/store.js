import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	marks: null,
    viewData: {
      name: null,
      amount: null,
      x: null,
      y: null
    },
  },
  mutations: {
    ADD_mark: (state, payload) => {
      state.marks.unshift(payload);
    },
  	SET_marks: (state, payload) => {
    	state.marks = payload;
  	},
    SET_viewData: (state, payload) => {
      state.viewData = payload;
    },
    SET_viewData_name: (state, payload) => {
      state.viewData.name = payload;
    },
    SET_viewData_amount: (state, payload) => {
      state.viewData.amount = payload;
    },
    SET_viewData_x: (state, payload) => {
      state.viewData.x = payload;
    },
    SET_viewData_y: (state, payload) => {
      state.viewData.y = payload;
    }
  }
})
