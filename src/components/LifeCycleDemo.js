import React, { Component } from "react";

export default class LifeCycleDemo extends Component{
    constructor(){
        super();
        this.state = {data:200};
      }
// It overwrites  the state with props 
// This is the natural place to set the state object based on the initial props.
      static getDerivedStateFromProps(props,state){
        return {data: props.color}
      }

      shouldComponentUpdate(){
        return false;
      }



      getSnapshotBeforeUpdate(prevProps,prevState)
      {
        alert("Before the update, the data was"+prevState.data);
      }

      // Called after the component is rendered
      componentDidMount(){
        alert("Component  has mount");
        // API calls  to load  data initially.
      }

      componentWillUnmount(){
        alert("comp going to unmounted");
      }


//The method that actually  outputs the  HTML to  the DOM
      render() {
        return (
          <div>
            This is LifeCycleDemo <br/>
            <button onClick={()=>this.setState({data:250})}>Change Data</button>
            States are: {this.state.data}
          </div>
        )
      }
}