import React,{Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {content, test} = this.props;
        return (
            <div 
                onClick={this.handleClick}
            >
                {test}{content}
            </div>
        )
    }
    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
        // this.props.deleteItem(this.props.index);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) return true;
        return false;
    }
}

// typeチェック
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,   // 必須
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),    // string 又は　number
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// default設定
TodoItem.defaultProps = {
    test: ''
}

export default TodoItem;