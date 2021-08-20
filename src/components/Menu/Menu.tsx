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
import { useHistory } from 'react-router-dom';
import {
  GroupOutlined,
  DashboardOutlined,
  DirectionsBikeOutlined,
  ArrowBack,
  SupervisedUserCircle,
} from '@material-ui/icons';
import { useClearAuth, useGetAuth } from '../../context/AuthContext';
import useStyles from './Menu.styles';

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
    history.push('/login');
  };

  const items = [
    {
      name: 'Dashboard',
      path: '/',
      icon: DashboardOutlined,
      action: () => history.push('/'),
    },
    {
      name: 'Comunidades',
      path: '/comunidades',
      icon: GroupOutlined,
      action: () => history.push('/comunidades'),
    },
    {
      name: 'Usuários',
      path: '/usuarios',
      icon: DirectionsBikeOutlined,
      action: () => history.push('/usuarios'),
    },
    {
      name: `Perfil de ${getAuth.value.displayName.split(' ')[0]}`,
      path: '',
      icon: SupervisedUserCircle,
      disabled: true,
      hide: !getAuth.value.authenticated,
    },
    {
      name: 'Sair',
      path: '/login',
      icon: ArrowBack,
      action: handleLogout,
      hide: !getAuth.value.authenticated,
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
            {items.map(
              item =>
                !item.hide && (
                  <div
                    className={
                      history.location.pathname === item.path
                        ? classes.activeItem
                        : classes.item
                    }
                    key={item.name}
                  >
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
