import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import './UserCard.scss';

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
          <Avatar id="user-avatar" src={user.profilePicture} alt="profile" />
          <Typography className="name-typography">{user.name}</Typography>
          <Typography className="description-typography">
            {user.address}
          </Typography>
          <Typography className="description-typography">
            {user.docNumber}
          </Typography>
        </li>
      </CardContent>
    </Card>
  );
};

export default UserCard;
