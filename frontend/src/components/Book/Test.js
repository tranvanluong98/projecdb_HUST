import React, { Component } from 'react';

class Test extends Component {
    state = {
        show: false
    }
    render() {
        
        return (
            <div>dmmm

                {this.state.show && <Show />}
            </div>
        );
    }
}
class Show extends Component {
    render() {
        return (
            <div>vcl
                
            </div>
        );
    }
}

export default Test;