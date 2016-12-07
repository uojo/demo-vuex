import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
// import Counter2 from './Counter2.vue'
import store from './store'

// 创建根组件
new Vue({
	el: '#app',
	data:{
		a1:1,
	},
	state:{
		s1:1,
	},
	store,
	render: createElement => {
		// console.log("createElement", createElement);
		console.log("组件设置", Counter);
		console.log("this", this);
		// 相当与将组件 Counter.vue 附着到 Vue的options上，以便将 template 和 components ... 加上
		
		return createElement(Counter);
	}
});


// 注意：
/*
 counter.vue 相当与
 const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
*/