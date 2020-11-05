import React, {Component} from 'react';
import {Button} from 'antd';
import '../../style.css'

class BtnLogout extends Component {
    render () {
        return (
            <Button className='logoutBtn'>ログアウト</Button>
        )
    }
}

export default BtnLogout;