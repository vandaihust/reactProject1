import React, { Component } from 'react';

class Reset extends Component {
    constructor(props){
        super(props);
        this.resetFull = this.resetFull.bind(this)
    }
    resetFull(){
        this.props.onReceiveSize(8);
        this.props.onReceiveColor('red')
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" style={{ marginLeft: '10px' }} onClick={this.resetFull}>Reset</button>
            </div>
        );
    }
}

export default Reset;