import * as actionTypes from './actionTypes';

export const playerMove = (e) => {
    console.log(e.key)
    return {
        type: actionTypes.PLAYER_MOVE,
        eventKey: e.key

    }
}