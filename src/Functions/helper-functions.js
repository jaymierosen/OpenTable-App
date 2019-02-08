import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';

library.add(faDollarSign);

export function capFrstLttr(str) {
  var text = str;
  text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  return text;
}

export function numToDollarSign(num) {
  return (
    <span>
      { Array.from({ length: num }, (_, i) =>
        <span role="img" aria-label="dollar sign icon" key={`${i}`}> <FontAwesomeIcon style={{ color: 'palevioletred' }} icon="dollar-sign" /></span>) }
    </span>
  ) 
}