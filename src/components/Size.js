import React, { Component } from 'react';

class ColorPicker extends Component {
    
    constructor(props){
        super(props);
        this.state = {size:8};
        this.increaseSize = this.increaseSize.bind(this);
        this.decreaseSize = this.decreaseSize.bind(this);
    }
    increaseSize(){
        if(this.props.size < 36){
            this.setState({
                size: this.props.size+2
            });   
            console.log(this.props.size+2);
            this.props.onReceiveSize(this.props.size+2)
        } else {
            alert("Max size")
            this.setState({
                size: this.props.size-2
            }); 
        }
        
       
    }
  
    
    decreaseSize(){
        if(this.props.size > 8){
            this.setState({
                size: this.props.size-2
            });
            console.log(this.props.size-2);
            this.props.onReceiveSize(this.props.size-2)
        } else {
            alert("Min size")
            this.setState({
                size: this.props.size+2
            }); 
        }
        
       
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ border: 'solid 1px #00abffc7' }}>
                                <p className="col-12" style={{ color: 'white', background: '#00abffc7 ', padding:'10px 10px' }}>Size: {this.props.size} px </p>
                                
                                <br />
                                <p className="col-12" style={{paddingBottom:'20px'}}>
                                   <button className="btn btn-success" onClick={this.decreaseSize}>Giảm - </button>
                                   <button className="btn btn-success" style={{marginLeft:'10px'}} onClick={this.increaseSize}>Tăng + </button>

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