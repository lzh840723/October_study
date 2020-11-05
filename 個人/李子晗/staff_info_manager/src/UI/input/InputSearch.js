import React, {Component} from 'react';
import '../../style.css'

class InputSearch extends Component {
    render(){
        return (
            <input className='searchInput' placeholder="職員ＩＤを入力してください" />
        )
    }
}

export default InputSearch;