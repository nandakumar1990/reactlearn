import {Store} from "./store";
const initialState = {
    count:80,
}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case "INCREMENT":
            return { count : state.count + 1 };
        case "DECREMENT":
            return { count : state.count - 1 };
        default :
        return state;
    }
}