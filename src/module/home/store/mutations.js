import * as types from './types.js'

export default {
    [types.SAVE_TAG](state, payload) {
        state.context = payload;
    }
}
    