import sinon from 'sinon'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import data from './data'
const log = console.log
const localVue = createLocalVue()
localVue.use(Vuex)

describe('vuex action', () => {
  const stub = sinon.stub()
  stub.withArgs('success').returns(Promise.resolve(data.b))
  // stub.withArgs('error').returns(Promise.reject(data.c))
  let store
  let state
  let actions = {
    'fn10': ({dispath, commit}, payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('fn20', data.a)
          resolve()
        }, 0)
      })
    },
    'fn11': ({dispath, commit}, payload) => {
      return new Promise((resolve, reject) => {
        stub('success', payload).then((res) => {
          commit('fn20', res)
          resolve()
        })
      })
    }
  }
  let mutations = {
    'fn20': (state, payload) => {
      state.name = payload
    }
  }

  beforeEach(() => {
    state = {name: data.i}
    let store_ops = {
      state,
      actions,
      mutations
    }
    // console.log(store_ops)
    store = new Vuex.Store(store_ops)
  })
  it('dispath, timeout', (done) => {
    expect(state.name).toBe(data.i)
    store.dispatch('fn10').then(() => {
      expect(state.name).toBe(data.a)
      done()
    })
  })
  it('dispath, sinon', (done) => {
    expect(state.name).toBe(data.i)
    store.dispatch('fn11', data.a).then(() => {
      // action 收到 payload
      expect(stub.lastCall.args[1]).toBe(data.a)
      // state 被变更
      expect(state.name).toBe(data.b)
      done()
    })
  })
  it('commit', () => {
    expect(state.name).toBe(data.i)
    store.commit('fn20', data.a)
    expect(state.name).toBe(data.a)
  })
})
