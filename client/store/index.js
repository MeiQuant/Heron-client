import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menu from './modules/menu'
import log from './modules/log'
import ticks from './modules/trade/ticks'
import positions from './modules/trade/positions'
import orders from './modules/trade/orders'
import trades from './modules/trade/trades'
import account from './modules/trade/account'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'development',
  actions,
  getters,
  modules: {
    app,
    menu,
    log,
    ticks,
    positions,
    orders,
    trades,
    account
  },
  state: {
    pkg
  },
  mutations: {
  }
})

export default store
