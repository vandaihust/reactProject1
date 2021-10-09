import React, { Component } from 'react';

class Show extends Component {
    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.size +'px', 
            
        }
    }
    
    render() {
        return (
            <div>
                <br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>Color: {this.props.color} - Fontsize: {this.props.size} px</h6>
                            <br /><br /><br />
                            <div className="form-group">
                                <div type="text" className="form-control"
                                    style={this.setStyle()}
                                >Nội dung setting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;