import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { sample } from 'lodash';
import * as actionTypes from '../../store/actions/ballMovement';

function Enemy (state) {

    const [bottom, setBottom] = useState(50);
    const [right, setRight] = useState(50);
    const [intervalId, setIntervalId] = useState();
    const [hit, setHit] = useState(false);

    let moveHor = Math.random().toFixed(1) / 2 * sample([1, -1]);
    let moveVer = Math.random().toFixed(1) / 2 * sample([1, -1]);


    useEffect(() => {
        const interval = setInterval(() => {
            setBottom(bottom => bottom + moveVer);
            setRight(right => right + moveHor);
        }, 10);
        setIntervalId(interval);
        return () => clearInterval(interval);

      }, []);


      if(bottom <= 0 || bottom === 100 && !hit){
        clearInterval(intervalId)
        moveVer *= -1 
        const interval = setInterval(() => {
            console.log('ok')
        },10)
        setIntervalId(interval);
        clearInterval(interval);
        setHit(hit => true)
    }

    if(right <= 0 || right === 100 && !hit){
        clearInterval(intervalId)
        moveHor *= -1 
        const interval = setInterval(() => {
            console.log('ok')
        },10)
        setIntervalId(interval);
        clearInterval(interval);
        setHit(hit => true)
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