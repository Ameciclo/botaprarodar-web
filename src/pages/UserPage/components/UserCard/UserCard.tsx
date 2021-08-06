import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import './UserCard.scss';
import { Document, MapPin } from '../../../../assets/icons';

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
  return (
    <Card className="user-card">
      <CardContent>
        <li key={user.id}>
          <Avatar
            className="user-avatar"
            src={user.profilePicture}
            alt="profile"
          />
          <Typography className="name-typography">{user.name}</Typography>
          <div className="description">
            <img src={MapPin} alt="map pin" />
            <Typography>{user.address}</Typography>
          </div>
          <div className="description">
            <img src={Document} alt="document" />
            <Typography>{user.docNumber}</Typography>
          </div>
        </li>
      </CardContent>
    </Card>
  );
};

export default UserCard;
