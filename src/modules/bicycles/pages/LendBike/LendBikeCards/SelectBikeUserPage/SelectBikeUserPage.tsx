import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography/Typography';
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { EmptyState } from 'shared/components';
import { EmptyStateImage } from 'shared/assets/images';
import Loading from '../../../../../../shared/components/Loading/Loading';
import UserService from '../../../../../users/services/UserService';
import User from '../../../../../users/models/User';
import useStyles from './SelectBikeUserPage.styles';

const SelectBikeUserPage: React.FC = () => {
  const location = useLocation();
  const communityId = location.state?.communityId;
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState('');
  const classes = useStyles();

  const handleTextInput = e => {
    setTextInput(e.target.value);
  };
  const lowerCased = textInput.toUpperCase();
  const filteredUsers = users.filter(user =>
    user.name.toUpperCase().includes(lowerCased),
  );

  useEffect(() => {
    UserService.getUsersByCommunity(communityId)
      .then(res => {
        setUsers(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [communityId]);

  return (
    <div className={classes.positionStyle}>
      <Typography component="h5" variant="h5" className={classes.titleStyle}>
        Selecione o ciclista
      </Typography>

      <TextField
        className={classes.textFieldStyle}
        id="busca"
        type="text"
        placeholder="Procure o ciclista pelo nome..."
        onChange={handleTextInput}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {loading ? (
        <Loading />
      ) : filteredUsers.length ? (
        <div>
          {filteredUsers?.map(user => {
            return (
              user.id && (
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar
                        className={classes.avatar}
                        src={user?.profilePicture}
                        alt="profile"
                      />
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={user?.name}
                    subheader={user?.telephone}
                  />
                </Card>
              )
            );
          })}
        </div>
      ) : (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Nenhuma usuária cadastrada!"
          subheading="Cadastre uma nova usuária em nosso aplicativo."
        />
      )}
    </div>
  );
};
export default SelectBikeUserPage;
