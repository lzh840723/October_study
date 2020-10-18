import { ADD_INPUT_ITEM, CHANGE_INPUT_VALUE, DELETE_INPUT_ITEM } from "./actionTypes"

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_INPUT_ITEM,
});

export const getInputDeleteAction = (index) => ({
    type: DELETE_INPUT_ITEM,
    index
});