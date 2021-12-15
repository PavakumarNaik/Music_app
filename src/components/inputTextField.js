import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputTextField(props) {
  const{handleInputValueChange, value, label, id, errors }=props

  return (
 
      <div>
        <TextField
          id={id}
          label={label}
          multiline
          maxRows={4}
          value={value}
          onChange={handleInputValueChange}
          error={errors}
          helperText={errors}
        />
        
      </div>
    
  );
}