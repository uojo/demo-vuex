import * as Types from "./types"

console.log( "Module.Types", Types );

// initial state
const state = {
	countA:10,
	countB:20
}

// mutations
const mutations = {
	[Types.MU_DOUBLE_INCREMENT](state){
		state.countA*=2;
	},
	[Types.MU_DOUBLE_DECREMENT](state){
		state.countA/=2;
	},
	[Types.MU_DOUBLE_RESET](state){
		state.countA = 1;
		state.countB = 1;
	}
	
}

const actions = {
	[Types.AC_DOUBLE_INCREMENT](context,payload){
		context.commit( Types.MU_DOUBLE_INCREMENT );
	},
	[Types.AC_DOUBLE_DECREMENT](context,payload){
		context.commit( Types.MU_DOUBLE_DECREMENT );
	},
}

export default {
	state,
	mutations,
	actions
}
