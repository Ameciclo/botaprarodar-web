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
  PlaceOutlined,
  AssignmentOutlined,
  PhoneOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import useStyles, { StyledBadgeUserDetail } from './UserDetailInfo.styles';
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
            <AssignmentOutlined className={classes.icon} />
            <Typography>
              {user?.docNumber?.toString() || 'Documento não informado'}
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
      <Grid item xs={12} lg={6}>
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
