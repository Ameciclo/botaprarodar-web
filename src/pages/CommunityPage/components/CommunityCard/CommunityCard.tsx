import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './CommunityCard.styles';

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
            <MoreHorizIcon className={classes.icon} />
          </div>
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
          >
            {community.description}
          </Typography>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                secondary={community.org_name}
                className={classes.listItemText}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText
                secondary={community.org_email}
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
