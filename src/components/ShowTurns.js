import React from 'react';

const ShowTurns = (props) => {
    return (
      <p className='turns'>
        <span >{props.turns} </span><br/>
        Voltas
      </p>
    );
  }

  export default ShowTurns;