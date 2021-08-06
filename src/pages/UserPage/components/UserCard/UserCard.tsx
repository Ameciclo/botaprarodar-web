import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import { Document, MapPin } from '../../../../assets/icons';
import useStyles from './UserCard.styles';

interface UserCardProps {
  user: {
    name: string;
    communityId: string;
    telephone: string;
    status: boolean;
    profilePicture: string;
    id: string;
    address: string;
    docNumber: bigint;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <li key={user.id}>
          <Avatar
            className={classes.avatar}
            src={user.profilePicture}
            alt="profile"
          />
          <Typography className={classes.name}>{user.name}</Typography>
          <div className={classes.description}>
            <img src={MapPin} alt="map pin" className={classes.icon} />
            <Typography className={classes.text}>{user.address}</Typography>
          </div>
          <div className={classes.description}>
            <img src={Document} alt="document" className={classes.icon} />
            <Typography className={classes.text}>{user.docNumber}</Typography>
          </div>
        </li>
      </CardContent>
    </Card>
  );
};

export default UserCard;
