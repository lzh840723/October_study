import React,{Component, Fragment} from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            address:'',
            list:[]
        }
    }

    render() {
        return (
            <Fragment>

                <div>
                    <h2>郵便番号を入力し公開APIを利用しアドレスを取得し追加で表示する。</h2>
                    郵便番号：
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
                </div>

                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                            <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this, index)}
                            >
                                {index + 1} : {item}
                            </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    async handleBtnClick(){
        const url = "https://api.zipaddress.net/?zipcode=" + this.state.inputValue;
        const output = await fetch(url).then(response=>response.json()).then(function (myJson) {
            if(myJson.code == 200){
                const address = myJson.data.fullAddress;
                return address;
            }else if (myJson.code == 404 || myJson.code == 400){
                const errmessage = '無効な郵便番号です。(' + myJson.code + ' : ' + myJson.message + ')';
                return errmessage;
            }
        });

        this.setState({
            list: [...this.state.list, this.state.inputValue + " : " + output],
            address: output,
            inputValue:''
        })
    }

    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Todolist;
