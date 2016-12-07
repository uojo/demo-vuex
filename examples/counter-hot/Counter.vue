<template>
<div>
<p>Count: {{ count }} ，local-limit: {{ limit }} </p>
<p><b>Recent History (last {{$store.state.limit}} entries): </b> [ {{ recentHistory }} ] </p>
<p>state/rootState：<b>{{$store.state.moduleA.countA}}</b> , <b>{{count_alias1}}</b></p>
<p>
	<button @click="increment">+</button>
	<button @click="decrement">-</button>
	<button @click="incrementIfOdd">Increment if odd</button>
	<button @click="incrementAsync">Increment async</button>
</p>

<hr />

<b>ModuleA.Double</b>
<p><span>CountA：</span>
	<button @click="incrementDouble">+</button>
		<b>{{countA}}</b>
	<button @click="ac_decrementDouble">-</button> 
	
	<button @click="reset">reset</button>
</p>

</div>
</template>

<script>
import * as Types from './src/modules/types'
import { mapState, mapGetters, mapActions, mapMutations  } from 'vuex'

export default {
	computed: {
		...mapState({
			countA:(state)=>state.moduleA.countA,
			count_alias1:(state, rootState)=>{
				console.debug("state/rootState", state, rootState);
				return rootState.count;
			}
		}),
		...mapGetters([
			'limit',
			'count',
			'recentHistory'
		])
	},
	methods: {
		...mapActions([
			'increment',
			'decrement',
			'incrementIfOdd',
			'incrementAsync',
		]),
		...mapActions({
			'ac_decrementDouble':Types.AC_DOUBLE_DECREMENT,
		}),
		incrementDouble(){
			// console.debug("mapAction", this);
			
			// 触发模块中的 action
			this.$store.dispatch( Types.AC_DOUBLE_INCREMENT );
		},
		...mapMutations({
			"m_reset":Types.MU_DOUBLE_RESET,
		}),
		reset(){
			this.m_reset(10,20);
		}
	}
}
</script>
