import React, { useState } from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';
import {
  MoreHoriz,
  LockOpenOutlined,
  LockOutlined,
  DescriptionOutlined,
  EditOutlined,
} from '@material-ui/icons';
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
        <MoreHoriz />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem onClick={handleClose}>
          <EditOutlined /> Editar
        </MenuItem>
        {isBlocked ? (
          <MenuItem onClick={handleClose}>
            {' '}
            <LockOpenOutlined /> Desbloquear
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            {' '}
            <LockOutlined /> Bloquear
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <DescriptionOutlined />
          Documentos
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
