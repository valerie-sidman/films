import React from 'react';
import Star from './Star.js';
import { nanoid } from 'nanoid';

export default function Stars({count}) {
  if(count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<Star key={nanoid()} />);
  }

  return <ul className="card-body-stars">{stars}</ul>
}

Stars.defaultProps = {
  count: 0
};
