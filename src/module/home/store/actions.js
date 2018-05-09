import * as types from './types.js'

export const savePassText = ({
  commit,
  state
}, payload) => {
  commit(types.SAVE_TAG, payload)
}