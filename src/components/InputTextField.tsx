import React from 'react';

const InputTextField: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div>
      <span>{label}</span>
      <input type="text"></input>
    </div>
  );
};

export default InputTextField;
