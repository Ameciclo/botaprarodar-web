import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

interface InputProps {
  control: any;
  name: string;
  label: string;
  type: string;
  dataTestId: string;
  className: string;
  rules: Record<string, unknown>;
}

const Input: React.FC<InputProps> = ({
  control,
  name,
  label,
  dataTestId,
  rules,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          variant="outlined"
          inputProps={{ 'data-testid': { dataTestId } }}
          error={!!error}
          helperText={error ? error.message : null}
          {...props}
        />
      )}
    />
  );
};

export default Input;
