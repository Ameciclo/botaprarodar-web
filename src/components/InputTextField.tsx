import { TextField } from '@material-ui/core';
import React from 'react';

const InputTextField: React.FC<{
  label: string;
  type: string;
  testID?: string;
  className: string;
  changeHandler(event: React.ChangeEvent): void;
}> = ({ label, type, changeHandler, testID, className }) => {
  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        type={type}
        data-testid={testID}
        className={className}
        onChange={event => changeHandler(event)}
      />
    </div>
  );
};

export default InputTextField;
