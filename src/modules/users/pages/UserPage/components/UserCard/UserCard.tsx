import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography, Grid } from '@material-ui/core';
import { LockOutlined, PlaceOutlined } from '@material-ui/icons';
import { toast } from 'shared/components';
import { GenderTypes } from 'modules/users/models/types/GenderTypes';
import { RacialTypes } from 'modules/users/models/types/RacialTypes';
import { SchoolingTypes } from 'modules/users/models/types/SchoolingTypes';
import { SchoolingStatusTypes } from 'modules/users/models/types/SchoolingStatusTypes';
import { IncomeTypes } from 'modules/users/models/types/IncomeTypes';
import UserService from '../../../../services/UserService';
import UserMenu from '../UserMenu/UserMenu';
import useStyles, { StyledBadgeUserCard } from './UserCard.styles';

interface UserCardProps {
  user: {
    name: string;
    createDate: string;
    address: string;
    gender: GenderTypes;
    profilePicture: string;
    age: string;
    racial: RacialTypes;
    schooling: SchoolingTypes;
    schoolingStatus: SchoolingStatusTypes;
    income: IncomeTypes;
    communityId: string;
    telephone: string;
    status: boolean;
    id: string;
    isBlocked: boolean;
    userQuiz: {
      alreadyUseBPR: boolean;
      alreadyUseBPROpenQuestion: string;
      motivationOpenQuestion: string;
      alreadyAccidentVictim: boolean;
      problemsOnWayOpenQuestion: string;
      timeOnWayOpenQuestion: string;
    };
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
  const nameArray = user?.name.split(' ').filter(name => name.length > 0);
  const firstName = nameArray[0];
  let lastName = '';
  if (nameArray.length > 1) lastName = nameArray[nameArray.length - 1];
  const displayName = `${firstName} ${lastName}`;

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
              <Typography className={classes.name}>{displayName}</Typography>
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
