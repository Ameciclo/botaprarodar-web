import React, { useState } from 'react';
import { Button, MenuItem, Menu } from '@material-ui/core';
import { MoreVert, LockOpenOutlined, LockOutlined } from '@material-ui/icons';
import useStyles from './UserDetailMenu.styles';

interface UserMenuProps {
  isBlocked: boolean;
  onToggleBlock(): void;
}

const UserMenu: React.FC<UserMenuProps> = ({ isBlocked, onToggleBlock }) => {
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
        <MoreVert />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {isBlocked ? (
          <MenuItem onClick={onToggleBlock}>
            {' '}
            <LockOpenOutlined />
            Desbloquear
          </MenuItem>
        ) : (
          <MenuItem onClick={onToggleBlock}>
            {' '}
            <LockOutlined /> Bloquear
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default UserMenu;
