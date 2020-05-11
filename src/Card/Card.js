import React from 'react';
import './Card.css';

const card = props => {
  return (
    <div className='card' style={{ borderTopColor: props.color }}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <img src={props.img} alt='img' />
      </div>
    </div>
  );
};

export default card;
