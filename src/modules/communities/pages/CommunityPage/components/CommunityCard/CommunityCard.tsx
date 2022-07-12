import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PlaceOutlined } from '@material-ui/icons';
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
              <ListItemText
                secondary={community.description || 'Descrição não informada'}
                className={classes.listItemText}
              />
            </ListItem>
            <ListItem className={classes.listAddressItem}>
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
