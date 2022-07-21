import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './CreateCommunityButton.styles';

const DeleteCommunityButton: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    history.push('/comunidades/criar');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleClick}
    >
      Cadastrar comunidade
    </Button>
  );
};

export default DeleteCommunityButton;
