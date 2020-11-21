import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { sample } from 'lodash';
import * as actionTypes from '../../store/actions/ballMovement';


function Enemy (state) {

    const [bottom, setBottom] = useState(50);
    const [right, setRight] = useState(50);
    const [intervalId, setIntervalId] = useState();
    const [hit, setHit] = useState(0);
    const [moveHor, setMoveHor] = useState(Math.random().toFixed(1) / 2 * sample([1, -1]));
    const [moveVer, setMoveVer] = useState(Math.random().toFixed(1) / 2 * sample([1, -1]));

    



    useEffect(() => {
        const interval = setInterval(() => {
            setBottom(bottom => bottom + moveVer);
            setRight(right => right + moveHor);
        }, 20);
        setIntervalId(interval);
        return () => {
            clearInterval(interval);
            
        }
        
      }, [hit]);


      if(bottom <= 0 || bottom >= 100){
        if(bottom <= 0){
            setBottom(bottom + 2);
        } else {
            setBottom(bottom - 2);
        }
        clearInterval(intervalId)
        setMoveVer(moveVer * -1)
        setHit(hit + 1) 

    }

    if(right <= 0 || right >= 100){
        if(right <= 0){
            setRight(right + 2);
        } else {
            setRight(right - 2);
        }
        clearInterval(intervalId)
        setMoveHor(moveHor * -1)
        setHit(hit + 1)
    }


    return (
        <div className="enemy"  style={{position: "absolute", bottom: bottom + "%", right: right + "%"}} >
        </div>
    );
}

const mapStateToProps = state => {
//   return {
//     playerTop: state.ballMovement.playerTop,
//     playerLeft: state.ballMovement.playerLeft
//   }
}

const mapDispatchToProps = dispatch => {
//   return {
//     move: (e) => dispatch(actionTypes.move(e))
//   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy)