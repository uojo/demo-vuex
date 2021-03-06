import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const DECREMENT = "DECREMENT";

// root state object.
// each Vuex instance is just a single state tree. 单纯的数 = initD
const state = {
  count: 0
}

// = redux.reducer
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.


const mutations = {
  increment (state) {
    state.count++
  },
  // 常量表达式
  [DECREMENT] (state) {
    state.count--
  },
  incrementDouble: state => state.count+=2,
  decrementDouble: (state,payload) => {
	  state.count+=payload
  },
  resetCount(state){
	  state.count=0
  }
}

// = redux.action
// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit(DECREMENT),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  iDouble:({commit})=>new Promise((resolve,reject)=>{
  	commit("increment");
  	resolve();	 
  }),
  incrementDouble:({dispatch,commit})=> {
	dispatch("iDouble").then(()=>{
		commit("increment");
	})
	
  },
  decrementDouble:( ops, payload )=> {
	  // console.log( "actions", ops, payload );
	  ops.commit("decrementDouble", payload );
  },
  resetCount ( {commit} ){
	  return commit("resetCount")
  },
}

// getters are functions , 一个可以在多个 组件中 调用的方法集；在组件 使用 mapGetters 方法映射到组件中
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  showMsg:(state, getters) => {
	  // console.log( state, "getters", getters);
	  
	  return getters.evenOrOdd;
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// 使用热加载，需将 getters、actions、mutations 拆分成 commonJS模块
/* if( module.hot ){
	module.hot.accept([])
} */

export default store






