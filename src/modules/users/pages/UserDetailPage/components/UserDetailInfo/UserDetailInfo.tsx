import User from 'modules/users/models/User';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import {
  LockOutlined,
  RoomOutlined,
  AssignmentOutlined,
  PhoneOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import useStyles from './UserDetailInfo.styles';
import { StyledBadge } from '../../../UserPage/components/UserCard/UserCard.styles';
import UserService from '../../../../services/UserService';
import UserDetailMenu from '../UserDetailMenu/UserDetailMenu';
import { toast } from '../../../../../../shared/components';

interface UserInfoProps {
  user: User;
}

const UserDetailInfo: React.FC<UserInfoProps> = ({ user, ...rest }) => {
  const classes = useStyles();
  const [visibleDoc, setVisibleDoc] = useState(false);
  const [visibleResidence, setVisibleResidence] = useState(false);
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  const handleToggleBlock = async () => {
    try {
      const data = await UserService.toggleUserBlock(user.id, !isBlocked);
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
      <Grid item xs={4} className={classes.userContainer}>
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
        <div className={classes.userInfoContainer}>
          <div>
            <Typography variant="h4" className={classes.username}>
              {user?.name}
            </Typography>
          </div>
          <div className={classes.userInfoElements}>
            <PhoneOutlined className={classes.icon} />
            <Typography>{user?.telephone}</Typography>
          </div>
          <div className={classes.userInfoElements}>
            <AssignmentOutlined className={classes.icon} />
            <Typography>{user?.docNumber?.toString()}</Typography>
          </div>
          <div className={classes.userInfoElements}>
            <RoomOutlined className={classes.icon} />
            <Typography>{user?.address}</Typography>
          </div>
        </div>
        <Grid item xs={1} md={6}>
          <UserDetailMenu
            isBlocked={isBlocked}
            onToggleBlock={handleToggleBlock}
          />
        </Grid>
      </Grid>
      <Grid item xs={6} lg={5}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title="Fotos do Documento"
              />
              <hr />
              <CardContent className={classes.cardContent}>
                <button
                  type="button"
                  className={classes.imageButton}
                  onClick={() => setVisibleDoc(true)}
                >
                  <div className={classes.flexRowContainer}>
                    <img src={user?.docPicture} alt="document" />
                    <img src={user?.docPictureBack} alt="document" />
                  </div>
                </button>
                <Viewer
                  visible={visibleDoc}
                  onClose={() => {
                    setVisibleDoc(false);
                  }}
                  images={[
                    {
                      src: user?.docPicture || '',
                      alt: 'Frente do documento',
                    },
                    {
                      src: user?.docPictureBack || '',
                      alt: 'Verso do documento',
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                title="Comprovante de Residência"
              />
              <hr />
              <CardContent className={classes.cardContent}>
                <button
                  type="button"
                  className={classes.imageButton}
                  onClick={() => setVisibleResidence(true)}
                >
                  <img src={user?.residenceProofPicture} alt="document" />
                </button>
                <Viewer
                  visible={visibleResidence}
                  onClose={() => {
                    setVisibleResidence(false);
                  }}
                  images={[
                    {
                      src: user?.residenceProofPicture || '',
                      alt: 'Comprovante de residência',
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDetailInfo;
