import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createWarning(funcName) {
    return ()=>console.log(funcName + 'is not difined')
}
class Control extends Component {

    static defaultProps={
        onPlus:()=>createWarning('onPlus'),
        onSubtract:()=>createWarning('onSubtract'),
        onRandomizeColor:()=>createWarning('onRandomizeColor'),
    };

render() {
     return (
        <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>RandomColor Size</button>
        </div>
        );
    }
};

Control.PropTypes = {
    onPlus:PropTypes.func,
    onSubtract:PropTypes.func,
    onRandomizeColor:PropTypes.func        
};

export default Control;
