<template>
	<div id="">
		Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
			<button @click="incrementIfOdd">Increment if odd</button>
			<button @click="incrementAsync">Increment async</button>
		</p>
		<p>
			<button @click="incrementDouble">IncrementDouble</button>
			<button @click="decrementDouble(-2)">DecrementDouble</button>
			<button @click="resetCount">Reset</button>
		</p>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
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
