/* eslint-disable prettier/prettier */
import {
  AppBar,
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
import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Document } from '../../assets/icons';
import useStyles from './Menu.styles';

const Menu: React.FC = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const mobile = useMediaQuery('(max-width:1024px)');

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(state => !state);
  };

  const items = [
    {
      name: 'Comunidades',
      path: '/comunidades',
    },
    {
      name: 'Dashboard',
      path: '/',
    },
    {
      name: 'Usuários',
      path: '/usuarios',
    },
  ];

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
            {items.map(item => (
              <div
                className={
                  location.pathname === item.path
                    ? classes.activeItem
                    : classes.item
                }
                key={item.name}
              >
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? classes.activeLink
                      : classes.link
                  }
                >
                  <ListItem button key={item.name}>
                    <ListItemIcon>
                      <img src={Document} alt="menu icon" />{' '}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      style={{ fontWeight: 500 }}
                    />
                  </ListItem>
                </Link>
              </div>
            ))}
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
