import React, { useState } from 'react';
import { LockOutlined, PlaceOutlined, PhoneOutlined } from '@material-ui/icons';
import { Grid, Typography, Avatar } from '@material-ui/core';
import User from 'modules/users/models/User';
import UserService from '../../../../services/UserService';
import UserDetailMenu from '../UserDetailMenu/UserDetailMenu';
import { toast } from '../../../../../../shared/components';
import useStyles, { StyledBadgeUserDetail } from './UserDetailInfo.styles';

interface UserInfoProps {
  user: User;
}

const UserDetailInfo: React.FC<UserInfoProps> = ({ user, ...rest }) => {
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
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="flex-end"
      spacing={2}
      className={classes.root}
      {...rest}
    >
      <Grid item xs={12} lg={6} className={classes.userContainer}>
        <StyledBadgeUserDetail
          overlap="circular"
          style={{ top: '85%' }}
          badgeContent={
            isBlocked && (
              <LockOutlined className={`${classes.badge} ${classes.blocked}`} />
            )
          }
        >
          <Avatar
            className={classes.avatar}
            src={user.profilePicture}
            alt="profile"
          />
        </StyledBadgeUserDetail>
        <div className={classes.userInfoContainer}>
          <div>
            <Typography variant="h4" className={classes.username}>
              {user?.name}
            </Typography>
          </div>
          <div className={classes.userInfoElements}>
            <PhoneOutlined className={classes.icon} />
            <Typography>
              {user?.telephone || 'Telefone não informado'}
            </Typography>
          </div>
          <div className={classes.userInfoElements}>
            <PlaceOutlined className={classes.icon} />
            <Typography>{user?.address || 'Endereço não informado'}</Typography>
          </div>
        </div>
        <Grid item xs={1} md={6}>
          <UserDetailMenu
            isBlocked={isBlocked}
            onToggleBlock={handleToggleBlock}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDetailInfo;
