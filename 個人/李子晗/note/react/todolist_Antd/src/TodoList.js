import React,{Component} from 'react';
import { Input, Button, List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
    render() {
        return (
            <div style={{marginTop : "10px", marginLeft : "10px"}}>
                <Input 
                    placeholder="to do info" 
                    style={{
                        width : '200px',
                        marginRight : '10px',
                        height : "21px"
                    }}
                />
                <Button 
                    type='primay'
                    style={{
                    }}
                >
                    ボタン
                </Button>
                 <List 
                    bordered
                    size="small"
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                 />
            </div>
        )
    }
}

export default TodoList;