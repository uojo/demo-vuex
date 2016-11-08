<template>
	<div id="">
		Clicked: {{ count }} times, count is {{ $store.getters.showMsg }}.
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
			<button @click="incrementIfOdd">Increment if odd</button>
			<button @click="incrementAsync">Increment async</button>
		</p>
		<p> {{countAlias}}, {{countOther}}</p>
		<p>
			<button @click="incrementDouble">IncrementDouble</button>
			<button @click="decrementDouble(-2)">DecrementDouble</button>
			<button @click="resetCount">Reset</button>
		</p>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

let localCount = 20;

export default {
  state:{
	s1:1
  },
  computed: {
	...mapGetters([
	'evenOrOdd',
	'showMsg'
	]),
	...mapState({
		count:state=>state.count,
		// 传入字符串 'count' 等同于 `state => state.count`
		countAlias: 'count',
		localCount:10,
		countOther:state=> {
			console.debug( this ); //this 为局部状态
			//(this.localCount)
			return state.count
		}
	})
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
	'incrementDouble',
	'decrementDouble',
	'resetCount',
	
  ])
}
</script>
