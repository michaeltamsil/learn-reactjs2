import React, { Component } from 'react';
import Add from './Add';
import Dashboard from './Dashboard';

//import Menu from './Menu';
class index extends Component {
    state = {
        showContent: "dashboard"
    }

    showDashboard = () => {
        this.setState({"showContent": "dashboard"})
    }

    showAdd = () => {
        this.setState({"showContent": "add"})
    }

    render() {
        let menampilkan;
        if (this.state.showContent === "dashboard"){
            menampilkan = <Dashboard/>
        } else {
            menampilkan = <Add/>
        }
        return (
            <div>
                <button onClick={this.showDashboard}>Dashboard</button>
                <button onClick={this.showAdd}>Add</button>
                <br/>
                {menampilkan}
            </div>
        )
    }
}

export default index;