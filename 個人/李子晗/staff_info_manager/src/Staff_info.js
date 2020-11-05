import React,{Component} from 'react';
// import {
//     getInputChangeAction, 
//     getAddItemAction, 
//     getInputDeleteAction//,
//     // initListAction
// } from './store/actionCreators.js'
import store from './store';
import Header from './UI/Header'
import Footer from './UI/Footer.js';
import Body from './UI/Body.js';

class StaffInfo extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleStoreChange = this.handleStoreChange.bind(this);
        // this.handleBtnClik = this.handleBtnClik.bind(this);
        // this.handleItemDelete = this.handleItemDelete.bind(this);
        // store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <>
                <Header 
                    // inputValue={this.state.inputValue}
                    // list={this.state.list}
                    // handleInputChange={this.handleInputChange}
                    // handleBtnClik={this.handleBtnClik}
                    // handleItemDelete={this.handleItemDelete}
                />
                <Body />
                <Footer />
            </>
        )
    }
    // handleItemDelete(index) {
    //     const action = getInputDeleteAction(index);
    //     store.dispatch(action);
    // }
    // handleStoreChange() {
    //     this.setState(store.getState());
    // }
    // handleBtnClik() {
    //     const action = getAddItemAction();
    //     store.dispatch(action);
    // }
    // handleInputChange(e) {
    //     const action = getInputChangeAction(e.target.value);
    //     store.dispatch(action);
    // }
    // componentDidMount() {
    // }
}

export default StaffInfo;