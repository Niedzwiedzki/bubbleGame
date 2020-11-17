import * as actionTypes from '../actions/actionTypes';


const initialState = {
    playerTop: 0,
    playerLeft: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MOVE:
            const newState = {...state}
            if(action.eventKey === "ArrowUp"){
                newState.playerTop -= 2
            } else if (action.eventKey === "ArrowDown"){
                newState.playerTop += 2
            } else if (action.eventKey === "ArrowRight"){
                newState.playerLeft += 2
            } else if (action.eventKey === "ArrowLeft"){
                newState.playerLeft -= 2
            }
            return {
                ...newState,
            };
        default:
            return state;
    }
};

export default reducer;