import * as actionTypes from './actionTypes';

export const move = (e) => {
    console.log(e.key)
    return {
        type: actionTypes.MOVE,
        eventKey: e.key

    }
}