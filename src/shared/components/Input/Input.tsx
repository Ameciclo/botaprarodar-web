import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';
import InputMask from 'react-input-mask';
import useStyles from './Input.styles';

export type MaskType = 'phone' | 'date' | 'time';

interface InputProps {
  control: any;
  name: string;
  label: string;
  type: string;
  dataTestId: string;
  className: string;
  defaultValue?: string;
  mask?: MaskType;
  rules?: Record<string, unknown>;
  fullWidth?: boolean;
}

const enumMask = {
  phone: '(99)99999-9999',
  date: '99/99/9999',
  time: '99:99',
};

const Input: React.FC<InputProps> = ({
  control,
  name,
  label,
  dataTestId,
  rules,
  defaultValue,
  mask,
  fullWidth = false,
  ...props
}) => {
  const classes = useStyles();
  const hasMask = !!mask;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {hasMask ? (
            <InputMask mask={enumMask[mask]} value={value} onChange={onChange}>
              {inputProps => (
                <TextField
                  label={label}
                  variant="outlined"
                  inputProps={{ 'data-testid': dataTestId }}
                  fullWidth={fullWidth}
                  error={!!error}
                  helperText={
                    error ? (
                      <span className={classes.errorContainer}>
                        <ErrorOutline />
                        {error.message}
                      </span>
                    ) : null
                  }
                  disableunderline="true"
                  {...inputProps}
                  type="tel"
                />
              )}
            </InputMask>
          ) : (
            <TextField
              label={label}
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              inputProps={{ 'data-testid': dataTestId }}
              fullWidth={fullWidth}
              error={!!error}
              helperText={
                error ? (
                  <span className={classes.errorContainer}>
                    <ErrorOutline />
                    {error.message}
                  </span>
                ) : null
              }
              {...props}
            />
          )}
        </>
      )}
    />
  );
};

export default Input;
