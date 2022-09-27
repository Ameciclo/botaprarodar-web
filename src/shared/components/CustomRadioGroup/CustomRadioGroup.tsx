import { FC, useState } from 'react';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import useStyles from './CustomRadioGroup.styles';

type directionLabel = 'row' | 'column';

interface OptionRadioGroup {
  value: string;
  label: string;
}

export interface Props {
  title: string;
  value: string;
  direction?: directionLabel;
  name: string;
  options: OptionRadioGroup[];
  onChange: any;
}

const CustomRadioGroup: FC<Props> = ({
  title,
  value,
  direction,
  name,
  options,
  onChange,
}) => {
  const classes = useStyles();
  const [valueSelected, setValueSelected] = useState(value);

  const handleChange = e => {
    onChange(e);
    setValueSelected(e.target.value);
  };

  return (
    <>
      <FormLabel className={classes.radioButtonTitle}>{title}</FormLabel>
      <RadioGroup
        row={direction === 'row'}
        name={name}
        value={valueSelected}
        onChange={handleChange}
      >
        {options.map(option => {
          return (
            <FormControlLabel
              className={classes.radioButton}
              key={option.value}
              value={option.value}
              control={<Radio className={classes.radioButtonColor} />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </>
  );
};

CustomRadioGroup.defaultProps = {
  direction: 'column',
};
export default CustomRadioGroup;
