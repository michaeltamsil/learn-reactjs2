import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
    }

    componentDidMount() {
        //console.log(`run componentDidMount`)
        this.interval = setInterval( () => {
            //onsole.log(`run this.tick()`);
            this.tick()
        } ,1000);
    }

    tick = () => {
        // this.setState({state:2})
        
        this.setState( (state) => {
            //console.log(`run tick to add state.seconds from`, state.seconds);
            return {
                seconds: (state.seconds + 1)
            }
        })
        if (this.state.seconds >= 5){
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <div>Seconds : {this.state.seconds}</div>
        );
    }
}

export default Timer;