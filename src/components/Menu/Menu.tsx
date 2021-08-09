/* eslint-disable prettier/prettier */
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './Menu.styles';
import { Document } from '../../assets/icons';


const Menu: React.FC = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();

  // eslint-disable-next-line no-console
  console.log(location.pathname === '/usuarios');
  const items = [{
    name: 'Comunidades',
    path: '/comunidades'
  },
  {
    name: 'Usuários',
    path: '/usuarios'
  }
  ]
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Bota pra rodar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {items.map((item) => (
              <div className={location.pathname === item.path ? classes.activeItem : classes.item}>
                <Link to={item.path} className={location.pathname === item.path ? classes.activeLink : classes.link}>
                  <ListItem button key={item.name}>
                    <ListItemIcon><img src={Document} alt="menu icon" /> </ListItemIcon>
                    <ListItemText primary={item.name} style={{ fontWeight: 500 }} />
                  </ListItem>
                </Link>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </>
  );
};

export default Menu;
