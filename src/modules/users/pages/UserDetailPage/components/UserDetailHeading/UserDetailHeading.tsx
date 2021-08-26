import React, { useState } from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import User from 'modules/users/models/User';
import { LockOutlined } from '@material-ui/icons';
import UserDetailMenu from '../UserDetailMenu/UserDetailMenu';
import useStyles from './UserDetilHeading.styles';
import { StyledBadge } from '../../../UserPage/components/UserCard/UserCard.styles';
import UserService from '../../../../services/UserService';

interface UserHeadingProps {
  user: User;
}

const UserDetailHeading: React.FC<UserHeadingProps> = ({ user, ...rest }) => {
  const classes = useStyles();
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  const handleToggleBlock = async () => {
    const data = await UserService.toggleUserBlock(user.id, !isBlocked);
    setIsBlocked(data.isBlocked);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      className={classes.root}
      {...rest}
    >
      <Grid item xs={12} className={classes.userBackground} />
      <Grid item xs={10} md={6} className={classes.userContainer}>
        <StyledBadge
          overlap="circular"
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
        </StyledBadge>
        <Typography variant="h4" className={classes.username}>
          {user?.name}
        </Typography>
      </Grid>
      <Grid item xs={2} md={6}>
        <UserDetailMenu
          isBlocked={isBlocked}
          onToggleBlock={handleToggleBlock}
        />
      </Grid>
    </Grid>
  );
};

export default UserDetailHeading;
