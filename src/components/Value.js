import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Value extends Component {

    static defaultProps={
        number: -1
 };

render() {
     return (
        <div>
              <h1>{this.props.number}</h1>  
        </div>
        );
    }
}

Value.propTypes = {
        number: PropTypes.number     
            };

export default Value;