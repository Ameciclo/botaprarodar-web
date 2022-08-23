import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import SelectBase from '@material-ui/core/Select';
import Label from '@material-ui/core/InputLabel';
import Option from '@material-ui/core/MenuItem';
import useStyles from './Select.styles';

interface SelectOptionsLabel {
  value: string;
  text: string;
}

export interface Props {
  id: string;
  dataTestId: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  options: SelectOptionsLabel[];
  onChange: any;
}

const Select = ({
  id,
  label,
  name,
  value,
  error,
  dataTestId,
  onChange,
  options,
}: Props) => {
  const [valueSelected, setValueSelected] = useState(value);
  const classes = useStyles();
  const hasError = !!error;

  const handleChange = e => {
    onChange(e);
    setValueSelected(e.target.value);
  };

  return (
    <FormControl
      className={classes.wrapper}
      variant="outlined"
      error={hasError}
      fullWidth
    >
      <Label
        htmlFor={`label-${id}`}
        data-testid={`label-${dataTestId}`}
        className={classes.label}
      >
        {label}
      </Label>

      <SelectBase
        labelId={`label-${id}`}
        data-testid={`select-${dataTestId}`}
        name={name}
        value={valueSelected}
        onChange={handleChange}
      >
        {options.map(option => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </SelectBase>

      {hasError && (
        <FormHelperText data-testid={`error-${dataTestId}`}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

Select.defaultProps = {
  error: '',
};

export default Select;
