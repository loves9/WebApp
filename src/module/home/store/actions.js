import * as types from './types.js'

const ls = window.localStorage;
export const updateDemoPosition = ({
    commit
}, top) => {
    commit({ type: 'updateDemoPosition', top: top });
};