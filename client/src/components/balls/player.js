import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/ballMovement';

const Player = (state) => {

  
    return (
        <div className="player"  style={{position: "absolute", top: state.playerTop, left: state.playerLeft}} >
          <input autoFocus className="player__input"  onKeyDown={(e) => state.move(e)}/> 
          <div className="player__ball"></div>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    playerTop: state.ballMovement.playerTop,
    playerLeft: state.ballMovement.playerLeft
  }
}

const mapDispatchToProps = dispatch => {
  return {
    move: (e) => dispatch(actionTypes.move(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)