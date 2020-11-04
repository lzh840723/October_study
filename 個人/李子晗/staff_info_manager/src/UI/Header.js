import React, {Component} from 'react';
// import { Input, Button, List } from 'antd';
import '../style.css'

class Header extends Component {
    render () {
        return (
            <div className='header'>
                <p id='title'>羽石社員管理システム</p>
            </div>
        )
    }
}

export default Header;