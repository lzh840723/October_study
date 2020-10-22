import React,{Component} from 'react';
import {
    getInputChangeAction, 
    getAddItemAction, 
    getInputDeleteAction,
    initListAction
} from './store/actionCreators.js'
import store from './store';
import TodoListUI from './store/TodoListUI.js'
import Axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClik = this.handleBtnClik.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClik={this.handleBtnClik}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
    handleItemDelete(index) {
        const action = getInputDeleteAction(index);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClik() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    componentDidMount() {
        Axios.get('https://api.zipaddress.net/?zipcode=191-0042').then((res) => {
            const data = res.data;
            this.handleMsg(data);
            // const action = initListAction(data);
            // store.dispatch(action);
        })
    }
    handleMsg(msg) {
        const jsonData= JSON.parse(msg);
        console.log(jsonData.data.address);
    }
}

export default TodoList;