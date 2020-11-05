import React, {Component} from 'react';
// import { Input, Button, List } from 'antd';
import '../style.css'

class Header extends Component {
    render () {
        return (
            <div className='header'>
                <label id='title'>羽石社員管理システム</label>
            </div>
        )
    }
}

export default Header;