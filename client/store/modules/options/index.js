/**
 * Created by alfred on 2017/3/8.
 */

import * as types from '../../mutation-types'

import quote from './quote'

const state = {
  quote,
  params: quote.params
}

const mutations = {
  [types.TOGGLE_OPTION_QUOTE_PARAMS] (state) {
    if (state.params.hidden) {
      state.params.hidden = false
    } else {
      state.params.hidden = true
    }
  }
}

export default {
  state,
  mutations
}
