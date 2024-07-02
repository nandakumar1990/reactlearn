import React  from "react";
import { connect } from "react-redux";

const Counter =  ({count, increment,decrement}) =>{
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

// mapStoreToProps - fetches  value from the store
const mapStatetoProps = (state) => ({
    count : state.count,
});

// to Dispatch the action
const mapDispatchtoProps =  (dispatch) => ({
    increment:() => dispatch({type: "INCREMENT"}),
    decrement:() => dispatch({type: "DECREMENT"}),
});
export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);