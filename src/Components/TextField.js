import React from 'react';
import { Input } from './StyledComponents';

const TextField = props => {
  return (
    <Input id="text-field" type="text" placeholder="e.g. Toronto" value={props.value} onChange={props.handleChange} />
  )
}

export default TextField;