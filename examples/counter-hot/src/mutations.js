export const increment = (state, payload) => {
  state.count+=3
  state.history.push('increment')
}

export const decrement = (state, payload) => {
  state.count--
  state.history.push('decrement')
}
