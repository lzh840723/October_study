
import React, {Component} from 'react';
import '../style.css'
import StaffId from './label/StaffId';
import BtnLogin from './button/BtnLogin';
import BtnLogout from './button/BtnLogout';
import BtnNewStaff from './button/BtnNewStaff';
import InputSearch from './input/InputSearch';
import BtnSearch from './button/BtnSearch';
import TabLabel from './label/TabLabel';
import StaffInfoTab from './table/StaffInfoTab';

class Body extends Component {
    render () {
        return (
            <div className='bodyDiv'>
                <div className='part1'>
                    <BtnLogout/>
                    <BtnLogin/>
                    <BtnNewStaff/>
                </div>
                <div className='part2'>
                    <StaffId/>
                    <InputSearch/>
                    <BtnSearch/>
                </div>
                <div>
                    <TabLabel/>
                    <StaffInfoTab/>
                </div>
            </div>
        )
    }
}

export default Body;