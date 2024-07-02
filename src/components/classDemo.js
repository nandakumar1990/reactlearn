import React, { Component } from 'react';

class ClassDemo extends Component {
  constructor(){
    super();
    this.state = {data:200};
  }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>State: {this.props.state}</p>
        <button onClick={()=>this.setState({data:101})}>Change state</button> 
        States are:{this.state.data}

      </div>
    );
  }
}

export default ClassDemo;