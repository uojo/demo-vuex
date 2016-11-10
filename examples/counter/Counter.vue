<template>
	<div id="">
		Clicked: <b title="mapState 获取值">{{ count }}</b> times, count is <b title="getters 调用兄弟方法">{{ $store.getters.showMsg }}</b>.
		<p>
			<button @click="increment" title="commit 字符串">+</button>
			<button @click="decrement" title="commit 常量">-</button>
			<button @click="incrementIfOdd" title="逻辑判断后 commit">Increment if odd</button>
			<button @click="incrementAsync" title="Promise 内异步 commit">Increment async</button>
		</p>
		<p> <b title="重命名之映射">{{countAlias}}</b>, {{countOther}}</p>
		<p>
			<button @click="incrementDouble" title="dispatch 组合多个 action">IncrementDouble</button>
			<button @click="decrementDouble(-2)" title="payload > commit">DecrementDouble</button>
			<button @click="resetCount" title="">Reset</button>
		</p>
		<p> 该组件内的局部数据：<b title="">{{a0}}</b> </p>
		<p> 通过 computed 定义的数： {{countHot}} {{countRed}} </p>
		<p> 继承父组件的值：<b title="">{{a0}}</b> ，{{a1}} {{s1}} ：顶层的 data 无法传递下来？</p>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

let localCount = 20;

export default {
	data:()=>{
		return {a0:"hello"}
	},
	props:["a1", "s1"],
	state:{
		s2:2
	},
	computed: {
		countRed:state=>{
			console.log( "指向",this ); // this === underfined
			return state.count;
		},
		...mapGetters([
			'evenOrOdd',
			'showMsg'
		]),
		...mapState({
			count:state=>state.count,
			// 传入字符串 'count' 等同于 `state => state.count`
			countAlias: 'count',
			localCount:10,
			countOther: state => {
				console.debug( "this 指向（对象）", this ); //打包后 this 变为 undefined
				//(this.localCount)
				return state.count;
			},
			countHot(state){
				console.log( "this 指向（函数式）", this );
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

