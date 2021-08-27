import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import {
  AssignmentOutlined,
  LockOutlined,
  RoomOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import useStyles, { StyledBadge } from './UserCard.styles';
import UserService from '../../../../services/UserService';

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
    isBlocked: boolean;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user, ...rest }) => {
  const classes = useStyles();
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  const handleToggleBlock = async () => {
    const data = await UserService.toggleUserBlock(user.id, !isBlocked);
    setIsBlocked(data.isBlocked);
  };

  return (
    <Card className={classes.card} {...rest}>
      <CardContent>
        <UserMenu isBlocked={isBlocked} onToggleBlock={handleToggleBlock} />
        <Link to={`/usuarios/${user?.id}`}>
          <li key={user?.id}>
            <div className={classes.cardContent}>
              <StyledBadge
                overlap="circular"
                badgeContent={
                  isBlocked && (
                    <LockOutlined
                      className={`${classes.blocked} ${classes.badge}`}
                    />
                  )
                }
              >
                <Avatar
                  className={classes.avatar}
                  src={user?.profilePicture}
                  alt="profile"
                />
              </StyledBadge>
              <div>
                <Typography className={classes.name}>{user?.name}</Typography>
                <div className={classes.description}>
                  <AssignmentOutlined className={classes.icon} />
                  <Typography className={classes.text}>
                    {user?.docNumber?.toString()}
                  </Typography>
                </div>
                <div className={classes.description}>
                  <RoomOutlined className={classes.icon} />
                  <Typography className={classes.text}>
                    {user?.address}
                  </Typography>
                </div>
              </div>
              <div />
            </div>
          </li>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserCard;
