import * as types from './ActionTypes';

export function increment(){
    return{
    type : types.INCREMENT
};
}

export function decrement(){
    return{
    type : types.DECREMENT
};
}


export function setColor(){
    return{
    type : types.SET_COLOR
};
}

