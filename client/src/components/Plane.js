import React from 'react';
import Player from './balls/player'
import Enemy from './balls/enemy'

const Plane = (state) => {


  return (
    <div className="plane">
      <Player/>
      <Enemy/>
      <Enemy/>
      <Enemy/>
      <Enemy/>
      <Enemy/>
    </div>
  );
}


export default Plane
