import React, { useState } from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';
import {
  Document,
  Lock,
  MoreHorizontal,
  UnLock,
} from '../../../../assets/icons';
import useStyles from './UserMenu.styles';

interface UserMenuProps {
  isBlocked: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ isBlocked }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src={MoreHorizontal} alt="menu" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <img className={classes.icon} src={Document} alt="unblock" /> Editar
        </MenuItem>
        {isBlocked ? (
          <MenuItem onClick={handleClose}>
            {' '}
            <img className={classes.icon} src={UnLock} alt="unblock" />{' '}
            Desbloquear
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            {' '}
            <img className={classes.icon} src={Lock} alt="block" /> Bloquear
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <img className={classes.icon} src={Document} alt="unblock" />
          Documentos
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
