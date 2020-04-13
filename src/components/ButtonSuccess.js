import React, { Component } from 'react';

class ButtonSuccess extends Component {
    state = {
        text: "Berhasil"
    }

    clicked = () => {
        const text = this.state.text;
        //this.setState( {text: "xxx"} )
        if (text === "Berhasil"){
            this.setState({"text": "Gagal"});
        }else {
            this.setState({"text": "Berhasil"});
        }
    }
    render() {
        return (
            <button onClick={this.clicked}>
                {this.state.text}
            </button>
        )
    }
}

export default ButtonSuccess;