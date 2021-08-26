import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import { LockOpenOutlined, LockOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Document, MapPin } from '../../../../../../shared/assets/icons';
import UserMenu from '../UserMenu/UserMenu';
import useStyles, { StyledBadge } from './UserCard.styles';

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

  return (
    <Card className={classes.card} {...rest}>
      <UserMenu isBlocked={false} />
      <CardContent>
        <Link to={`/usuarios/${user?.id}`}>
          <li key={user?.id}>
            <StyledBadge
              overlap="circle"
              badgeContent={
                user.isBlocked ? (
                  <LockOutlined
                    fontSize="small"
                    className={`${classes.blocked} ${classes.badge}`}
                  />
                ) : (
                  <LockOpenOutlined
                    className={`${classes.notBlocked} ${classes.badge}`}
                  />
                )
              }
            >
              <Avatar
                className={`${classes.avatar} ${
                  user.isBlocked
                    ? classes.avatarBlocked
                    : classes.avatarNotBlocked
                }`}
                src={user?.profilePicture}
                alt="profile"
              />
            </StyledBadge>
            <Typography className={classes.name}>{user?.name}</Typography>
            <div className={classes.description}>
              <img src={MapPin} alt="map pin" className={classes.icon} />
              <Typography className={classes.text}>{user?.address}</Typography>
            </div>
            <div className={classes.description}>
              <img src={Document} alt="document" className={classes.icon} />
              <Typography className={classes.text}>
                {user?.docNumber?.toString()}
              </Typography>
            </div>
          </li>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserCard;
