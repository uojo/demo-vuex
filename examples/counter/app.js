<<<<<<< HEAD
import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
// import Counter2 from './Counter2.vue'
import store from './store'

new Vue({
	el: '#app',
	data:{
		a1:1,
	},
	state:{
		s1:1,
	},
	store,
		render: S => {
		// console.log("Self", S);
		// console.log("组件", Counter);
		// 相当与将组件 Counter.vue 附着到 Vue的options上，以便将 template 和 components ... 加上
		return S(Counter);
	}
})


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

=======
import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
// import Counter2 from './Counter2.vue'
import store from './store'

new Vue({
  el: '#app',
  data:{
	a1:1,
  },
  state:{
	s1:1,
  },
  store,
  render: S => {
	  // console.log("Self", S);
	  // console.log("组件", Counter);
	  // 相当与将组件 Counter.vue 附着到 Vue的options上，以便将 template 和 components ... 加上
	  return S(Counter);
  }
})


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

>>>>>>> 021838877a5b601041672ac223d2468d950327ff
*/