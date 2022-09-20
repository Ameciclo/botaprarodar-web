import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import useStyles from './FormHeader.styles';

interface FormHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
  state?: any | null;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  link,
  state,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <div className={classes.formHeaderBackground} />
      <Typography variant="h1" component="h1" className={classes.heading}>
        <Link to={{ pathname: link, state }} style={{ display: 'flex' }}>
          <ArrowBackIos /> {title}
        </Link>
      </Typography>
    </div>
  );
};

FormHeader.defaultProps = {
  state: null,
};

export default FormHeader;
