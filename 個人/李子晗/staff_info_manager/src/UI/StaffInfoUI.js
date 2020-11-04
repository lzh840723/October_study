import React, {Component} from 'react';
import { Input, Button, List } from 'antd';

class StaffInfoUI extends Component {
    render () {
        return (
            <div style={{marginTop : "10px", marginLeft : "10px"}}>
                <Input 
                    placeholder="to do info" 
                    value={this.props.inputValue}
                    style={{
                        width : '200px',
                        marginRight : '10px',
                        height : "21px"
                    }}
                    onChange={this.props.handleInputChange}
                />
                <Button 
                    onClick={this.props.handleBtnClik}
                    type='primay'
                    style={{
                    }}
                >
                    提交 
                </Button>
                 <List 
                    bordered
                    size="small"
                    dataSource={this.props.list}
                    renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
                 />
            </div>
        )
    }

}

export default StaffInfoUI;