<template>
<div>
Count: {{ count }}
<p>
<button @click="increment">+</button>
<button @click="decrement">-</button>
<button @click="incrementIfOdd">Increment if odd</button>
<button @click="incrementAsync">Increment async</button>
</p>
<p><b>Recent History (last {{$store.state.limit}} entries): </b><br/>{{ recentHistory }}</p>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		/*...mapState({
			limit:"limit"
		}),*/
		...mapGetters([
			'limit',
			'count',
			'recentHistory'
		])
	},
	methods: mapActions([
		'increment',
		'decrement',
		'incrementIfOdd',
		'incrementAsync'
	])
}
</script>
