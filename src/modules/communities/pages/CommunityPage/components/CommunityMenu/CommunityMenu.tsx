import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, Menu } from '@material-ui/core';
import { MoreHoriz, EditOutlined } from '@material-ui/icons';
import useStyles from './CommunityMenu.styles';

interface CommunityMenuProps {
  communityId: string;
}

const CommunityMenu: React.FC<CommunityMenuProps> = ({ communityId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const history = useHistory();

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
        <MenuItem
          onClick={() => history.push(`/comunidades/editar/${communityId}`)}
        >
          <EditOutlined /> Editar
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CommunityMenu;
