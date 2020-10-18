import React,{Component, Fragment} from 'react';
import axios from 'axios';
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

    // ajax
    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data]
                }));
            })
            .catch(() => {alert('err')})
    }

    // componentWillMount() {   
    //     console.log('UNSAFE_componentWillMount');
    // }
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return false;
    // }

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
                        // ref={(input) => { this.input = input }}  // 直接domを修正するってお勧めではない
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
                <TodoItem 
                    key={item}
                    content={item} 
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    handleInputChange(e) {
    // handleInputChange() {
        // 非同期
        const value = e.target.value;
        // const value = this.input.value;
        
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