import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import useStyles from './FormHeader.styles';

interface FormHeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, link, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <div className={classes.formHeaderBackground} />
      <Typography variant="h1" component="h1" className={classes.heading}>
        <Link to={link} style={{ display: 'flex' }}>
          <ArrowBackIos /> {title}
        </Link>
      </Typography>
    </div>
  );
};

export default FormHeader;
