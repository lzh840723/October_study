import Axios from 'axios';

import {
    CHANGE_INPUT_VALUE,
    DELETE_INPUT_ITEM,
    ADD_INPUT_ITEM,
    INIT_LIST_ACTION
} from './actionTypes';

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

    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    if (action.type === ADD_INPUT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        const value = newState.inputValue;
        const zipcode = value.substring(0,3) + '-' + value.substring(3);
        Axios.get('https://api.zipaddress.net/?zipcode='+zipcode).then((res) => {
            const address = res.data.data.fullAddress;
            const code = res.data.code;
            if (code == 200) {
                newState.list.push(address);
                newState.inputValue = '';
                console.log(newState);
                return newState;
            }
        })
        // newState.list.push(newState.inputValue);
        // newState.inputValue = '';
    }

    if (action.type === DELETE_INPUT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}