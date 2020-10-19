import {CHANGE_INPUT_VALUE, DELETE_INPUT_ITEM, ADD_INPUT_ITEM} from './actionTypes';

const defaultState = {
    inputValue : "",
    list : []
};

// reducer可以接受state， 但是不能修改state
// 返回的必须是纯函数,纯函数是指給固定的输入，就一定会有固定的输出，且不会有副作用
// store必须是唯一的
// 只有store可以改变自己
// API
// createStore
// store.getState
// store.dispatch
// store.subscribe
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_INPUT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_INPUT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}