import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Show from './components/Show';
import Size from './components/Size';
import './App.css';
import Reset from './components/Reset';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 8
    }
    this.setOnColor = this.setOnColor.bind(this)
    this.setOnSize = this.setOnSize.bind(this)
  }
  setOnColor(params){
    console.log(params);
    this.setState({
      color:params
    })
  }
  setOnSize(params){
    console.log(params);
    this.setState({
      fontSize:params
    })
    console.log(params);
  }
  render() {
    return (
      <div>
        <div className="container" style={{paddingTop:'50px'}}>
          <div className="row">         
              <div className="col-md-6">
                <ColorPicker color={this.state.color} onReceiveColor={this.setOnColor}></ColorPicker>
              </div>          
              <div className="col-md-6">
                <Size size={this.state.fontSize} onReceiveSize={this.setOnSize}></Size>
              </div>
              <Reset onReceiveColor={this.setOnColor} onReceiveSize={this.setOnSize}></Reset>
              <div className="col-md-12">
                <Show color={this.state.color} size={this.state.fontSize}></Show>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;