import User from 'models/Users/User';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import {
  ContactMailOutlined,
  HomeOutlined,
  RoomOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import Viewer from 'react-viewer';
import useStyles from './UserDetailInfo.styles';

interface UserInfoProps {
  user?: User;
}

const UserDetailInfo: React.FC<UserInfoProps> = ({ user, ...rest }) => {
  const classes = useStyles();
  const [visibleDoc, setVisibleDoc] = useState(false);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      spacing={3}
      className={classes.root}
      {...rest}
    >
      <Grid item xs={12} lg={4}>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader} title="Endereço" />
          <hr />
          <CardContent className={classes.cardContent}>
            <RoomOutlined />
            <Typography>{user?.address}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader} title="Documento" />
          <hr />
          <CardContent className={classes.cardContent}>
            <ContactMailOutlined />
            <Typography>{user?.docNumber}</Typography>
            <button
              type="button"
              className={classes.imageButton}
              onClick={() => setVisibleDoc(true)}
            >
              <img src={user?.docPicture} alt="document" />
            </button>
            <Viewer
              visible={visibleDoc}
              onClose={() => {
                setVisibleDoc(false);
              }}
              images={[
                {
                  src: user?.docPicture || '',
                  alt: 'document',
                },
                {
                  src: user?.docPictureBack || '',
                  alt: 'document back',
                },
              ]}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title="Comprovante de residência"
          />
          <hr />
          <CardContent className={classes.cardContent}>
            <HomeOutlined />
            <Typography>
              {user?.residenceProofPicture ? 'Possui' : 'Não foi cadastrado'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserDetailInfo;
