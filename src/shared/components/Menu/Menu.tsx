import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useClearAuth,
  useGetAuth,
} from '../../../modules/authentication/contexts/AuthContext';
import useStyles from './Menu.styles';
import menuItems from './MenuItems';

const Menu: React.FC = ({ children }) => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:1024px)');
  const clearAuth = useClearAuth();
  const getAuth = useGetAuth();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(state => !state);
  };

  const handleLogout = () => {
    clearAuth.clearAuth();
    history.push('/');
  };

  const handleActiveMenu = useCallback(
    (item: any) => {
      if (item.path === '/') {
        return history.location.pathname === '/'
          ? classes.activeItem
          : classes.item;
      }
      return item.path && history.location.pathname.includes(item.path)
        ? classes.activeItem
        : classes.item;
    },
    [classes.activeItem, classes.item, history.location.pathname],
  );

  const PermanentDrawer: FC = ({ children: drawerChildren }) => (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {drawerChildren}
    </Drawer>
  );

  const ResizableDrawer: FC = ({ children: drawerChildren }) => (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={open}
    >
      {drawerChildren}
    </Drawer>
  );

  const MenuDrawer = mobile ? ResizableDrawer : PermanentDrawer;
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {mobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              className={classes.menuButton}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Bota pra rodar
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {menuItems(history, getAuth.value, handleLogout).map(
              item =>
                !item.hide && (
                  <div className={handleActiveMenu(item)} key={item.name}>
                    <ListItem
                      button
                      key={item.name}
                      onClick={item.action}
                      disabled={item.disabled}
                    >
                      <ListItemIcon>
                        <item.icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        style={{ fontWeight: 500 }}
                      />
                    </ListItem>
                    {item.name === 'Usuários' && (
                      <Divider className={classes.separator} />
                    )}
                  </div>
                ),
            )}
          </List>
        </div>
      </MenuDrawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: mobile,
        })}
      >
        <Toolbar />
        {children}
      </main>
    </>
  );
};

export default Menu;
