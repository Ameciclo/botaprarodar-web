import React from 'react';

const InputTextField: React.FC<{ label: string; type: string }> = ({
  label,
  type,
}) => {
  return (
    <div>
      <span>{label}</span>
      <input type={type} />
    </div>
  );
};

export default InputTextField;
