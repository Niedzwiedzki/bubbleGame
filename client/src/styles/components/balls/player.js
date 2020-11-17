import React, { useState } from 'react';

export default function Player() {

    const [positionVer, moveVer] = useState(0);
    const [positionHor, moveHor] = useState(0);

    return (
        <input className="player" style={{position: "absolute", top: moveVer, left: moveHor}} onKeyDown={() => handleKeyDown()}> 
        </input>
    );
}
