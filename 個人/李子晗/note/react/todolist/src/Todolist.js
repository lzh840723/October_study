import React,{Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/* コメント */}
                    <label 
                        // forは代わりにhtmlForを使って
                        htmlFor='insertArea'
                    >
                        入力内容
                    </label>
                    <input 
                    id='insertArea'
                    // classは代わりにclassNameを使って
                    className='input'
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>出す</button>
                </div>
                <ul>
                    {this.getToItem()}
                </ul>
            </Fragment>
        )
    }
    getToItem(){
        return this.state.list.map((item, index) => {
            return (
                <div>
                    <TodoItem 
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>
            )
        })
    }
    handleInputChange(e) {
        // 非同期
        const value = e.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }
    handleBtnClick() {
        this.setState(()=>({
            list:[...this.state.list, this.state.inputValue],
            inputValue : ''
        }))
    }
    handleItemDelete(i) {
        // immutale:
        // stateを変わることを禁止
        const list = [...this.state.list];
        list.splice(i, 1);
        this.setState({list:list})
    }
}

export default Todolist;