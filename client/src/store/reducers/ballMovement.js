import * as actionTypes from '../actions/actionTypes';


const initialState = {
    playerTop: 0,
    playerLeft: 0,
    eventKey: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PLAYER_MOVE:
            const newState = {...state}
            if(action.eventKey === "ArrowUp" && state.playerTop > 0){
                newState.playerTop -= 0.5
            } else if (action.eventKey === "ArrowDown" && state.playerTop < 100){
                newState.playerTop += 0.5
            } else if (action.eventKey === "ArrowRight" && state.playerLeft < 100){
                newState.playerLeft += 0.25
            } else if (action.eventKey === "ArrowLeft" && state.playerLeft > 0){
                newState.playerLeft -= 0.25
            }
            return {
                ...newState,
            };
        default:
            return state;
    }
};

export default reducer;