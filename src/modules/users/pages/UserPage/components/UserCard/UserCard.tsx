import { Avatar, Card, CardContent, Typography, Grid } from '@material-ui/core';
import {
  AssignmentOutlined,
  LockOutlined,
  PlaceOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'shared/components';
import UserMenu from '../UserMenu/UserMenu';
import useStyles, { StyledBadgeUserCard } from './UserCard.styles';
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
    try {
      const data = await UserService.setUserBlock(user.id, !isBlocked);
      setIsBlocked(data.isBlocked);
      const blockMsg = data.isBlocked ? 'bloqueado(a)' : 'desbloqueado(a)';
      toast.success(`${user.name} ${blockMsg}`, {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Desculpe isso não foi possível.', {
        autoClose: 3000,
      });
    }
  };

  return (
    <Card className={classes.card} key={user?.id} {...rest}>
      <CardContent style={{ padding: '20px 0px 20px 30px', paddingBottom: 20 }}>
        <div className={classes.menuContainer}>
          <UserMenu isBlocked={isBlocked} onToggleBlock={handleToggleBlock} />
        </div>
        <Link to={`/usuarios/${user?.id}`}>
          <Grid container className={classes.cardContent}>
            <Grid item xs={4} className={classes.avatarContainer}>
              <StyledBadgeUserCard
                overlap="circular"
                className={classes.badge}
                badgeContent={
                  isBlocked && (
                    <LockOutlined
                      data-testid="lock-icon"
                      className={`${classes.blocked} `}
                    />
                  )
                }
              >
                <Avatar
                  className={classes.avatar}
                  src={user?.profilePicture}
                  alt="profile"
                />
              </StyledBadgeUserCard>
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.name}>{user?.name}</Typography>
              <div className={classes.description}>
                <AssignmentOutlined className={classes.icon} />
                <Typography className={classes.text}>
                  {user?.docNumber?.toString()}
                </Typography>
              </div>
              <div className={classes.description}>
                <PlaceOutlined className={classes.icon} />
                <Typography className={classes.text}>
                  {user?.address}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserCard;
