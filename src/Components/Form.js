import React from 'react';
import { Label } from './StyledComponents';
import TextField from './TextField';
import Button from './Button';

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Label htmlFor="text-field">Enter a city:</Label>
      <TextField value={props.value} handleChange={props.handleChange} />
      <Button />
    </form>
  )
}

export default Form;