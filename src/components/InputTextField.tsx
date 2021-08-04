import React from 'react';

const InputTextField: React.FC<{
  label: string;
  type: string;
  testID?: string;
  changeHandler?: any;
}> = ({ label, type, changeHandler, testID }) => {
  return (
    <div>
      <span>{label}</span>
      <input
        type={type}
        data-testid={testID}
        onChange={event => changeHandler(event)}
      />
    </div>
  );
};

export default InputTextField;
