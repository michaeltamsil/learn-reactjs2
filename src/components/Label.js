import React, { Component } from 'react';

class Label extends Component{
    render(){
        return(
            <div>
                <label>{this.props.isi}</label>
            </div>
        )
    }
}

export default Label