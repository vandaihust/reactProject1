import React, { Component } from 'react';
import '../App.css';
class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorSelected: ["red", "blue", "green", "gray"],
        }

    }
    setColor(color) {
        return {
            background:color
        }
    }
    setBorderActive(color){
        this.props.onReceiveColor(color)
    }

    render() {
        let elementColorPicker = this.state.colorSelected.map((color, index) => {
            let result = <span key={index} className={this.props.color === color?'active':''}
            style={this.setColor(color)} 
            onClick={() => this.setBorderActive(color)}/>
            return result;
        });
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ border: 'solid 1px #00abffc7' }}>
                                <p className="col-12" style={{ color: 'white', background: '#00abffc7 ', padding: '10px 10px' }}>Color picker</p>
                                <br />
                                <p className="col-12" style={{ paddingBottom: '20px' }}>
                                    {/* <span  style={{   background: 'red', padding:'20px 32px', cursor:'pointer', border:'solid 5px black' }}/>
                                    <span  style={{   background: 'blue',padding:'20px 32px', marginLeft:'10px', cursor:'pointer'  }}/>
                                    <span  style={{   background: 'green',padding:'20px 32px', marginLeft:'10px', cursor:'pointer'  }}/>
        <span  style={{   background: 'grey',padding:'20px 32px', marginLeft:'10px', cursor:'pointer'  }}/> */}
                                    {elementColorPicker}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;