import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  AccountCircleOutlined,
  MailOutlineOutlined,
  PlaceOutlined,
} from '@material-ui/icons';
import useStyles from './CommunityCard.styles';
import CommunityMenu from '../CommunityMenu/CommunityMenu';

const CommunityCard: React.FC<any> = ({ community }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {community.name}
            </Typography>
            <CommunityMenu communityId={community.id} />
          </div>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <AccountCircleOutlined />
              </ListItemIcon>
              <ListItemText
                secondary={community.org_name || 'Nome do gestor não informado'}
                className={classes.listItemText}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <MailOutlineOutlined />
              </ListItemIcon>
              <ListItemText
                secondary={community.org_email || 'E-mail não informado'}
                className={classes.listItemText}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <PlaceOutlined />
              </ListItemIcon>
              <ListItemText
                secondary={community.address || 'Endereço não informado'}
                className={classes.listItemText}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default CommunityCard;
