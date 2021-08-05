import React from 'react';
import { Avatar, Card, CardContent } from '@material-ui/core';
import './UserCard.scss';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    communityId: string;
    telephone: string;
    profilePicture: string;
    status: boolean;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="user-card">
      <CardContent>
        <li key={user.id}>
          <Avatar id="user-avatar" src={user.profilePicture} alt="profile" />
          <p>
            NOME <span> {user.name} </span>
          </p>
          <p>
            Comunidade <span>{user.communityId}</span>
          </p>
          <p>
            TELEFONE <span>{user.telephone ? user.telephone : ' - '}</span>
          </p>
          <p>
            STATUS <span>{user.status ? 'Ativo' : 'Inativo'}</span>
          </p>
        </li>
      </CardContent>
    </Card>
  );
};

export default UserCard;
