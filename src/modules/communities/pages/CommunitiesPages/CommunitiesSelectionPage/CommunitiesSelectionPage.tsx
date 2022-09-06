import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Loading, toast } from 'shared/components';
import EmptyState from 'shared/components/EmptyState/EmptyState';
import { EmptyStateImage } from 'shared/assets/images';
import { useGetAuth } from 'modules/authentication/contexts/AuthContext';
import { UserService } from 'modules/users/services';
import Community from '../../../models/Community';
import CommunityService from '../../../services/CommunityService';
import CommunityCard from '../components/CommunityCard/CommunityCard';
import CreateCommunityButton from '../components/CreateCommunityButton/CreateCommunityButton';
import useStyles from './CommunitiesSelectionPage.styles';

const CommunitiesSelectionPage: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedInUserAdmin, setIsLoggedInUserAdmin] =
    useState<boolean>(false);
  const [textInput, setTextInput] = useState('');
  const history = useHistory();
  const classes = useStyles();
  const lowerCased = textInput.toUpperCase();
  const { value } = useGetAuth();

  const manageOnClick = community => {
    history.push(`comunidades/gerenciador-de-comunidade/${community.id}`);
  };

  const shouldLoggedInUserSeeCommunityCard = community => {
    return value.email === community.org_email || isLoggedInUserAdmin;
  };

  const filteredCommunities = communities.filter(
    com =>
      shouldLoggedInUserSeeCommunityCard(com) &&
      com.name.toUpperCase().includes(lowerCased),
  );

  const handleTextInput = e => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    UserService.isUserAdmin(value.uid)
      .then(isAdmin => {
        setIsLoggedInUserAdmin(isAdmin);
      })
      .catch(() => {
        toast.error('Serviço Indisponível');
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    setLoading(true);
    CommunityService.getAllCommunities()
      .then(res => {
        setCommunities(res);
      })
      .catch(() => {
        toast.error('Serviço Indisponível');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        data-testid="communities-header-grid"
        direction="row"
        justifyContent="space-between"
      >
        <Grid item md={8} xs={12}>
          <Typography variant="h5" gutterBottom className={classes.pageTitle}>
            Comunidades do Bota pra Rodar
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.subtitle}>
            Selecione a comunidade que deseja administrar
          </Typography>
          <TextField
            id="busca"
            type="text"
            placeholder="Que comunidade você está procurando?"
            onChange={handleTextInput}
            className={classes.filterCommunity}
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
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <CreateCommunityButton />
        </Grid>
      </Grid>

      {loading ? (
        <Loading />
      ) : communities.length ? (
        <Grid container spacing={4} data-testid="communities-grid">
          {filteredCommunities.length > 0 ? (
            filteredCommunities?.map(community => (
              <Grid
                key={community.id}
                item
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className={classes.card}
                data-testid="community-card-grid"
              >
                <CommunityCard
                  key={community.id}
                  community={community}
                  onClick={() => manageOnClick(community)}
                />
              </Grid>
            ))
          ) : (
            <EmptyState
              imgSrc={EmptyStateImage}
              heading="Não há resultados"
              subheading="Cadastre uma nova comunidade em nosso aplicaticativo."
            />
          )}
        </Grid>
      ) : (
        <div className={classes.emptyStateContainer}>
          <EmptyState
            imgSrc={EmptyStateImage}
            heading="Nenhuma comunidade cadastrada!"
            subheading="Cadastre uma nova comunidade em nosso aplicaticativo."
          />
        </div>
      )}
    </div>
  );
};

export default CommunitiesSelectionPage;
