import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Loading } from 'shared/components';
import EmptyState from 'shared/components/EmptyState/EmptyState';
import { EmptyStateImage } from 'shared/assets/images';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Community from '../../../models/Community';
import CommunityService from '../../../services/CommunityService';
import useStyles from './CommunitiesDisplayPage.styles';
import CommunityCard from '../components/CommunityCard/CommunityCard';
import CreateCommunityButton from '../components/CreateCommunityButton/CreateCommunityButton';

type CommunitiesDisplayType = {
  isSelectingCommunities: boolean;
};

const CommunitiesDisplayPage: React.FC<CommunitiesDisplayType> = ({
  isSelectingCommunities,
}) => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState('');
  const history = useHistory();
  const classes = useStyles();

  const handleTextInput = e => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    CommunityService.getAllCommunities()
      .then(res => {
        setCommunities(res);
      })
      .catch(err => {
        toast.error(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const manageOnClick = community => {
    if (isSelectingCommunities) {
      history.push(`comunidades/gerenciador-de-comunidade/${community.id}`);
    }
  };
  const lowerCased = textInput.toUpperCase();
  const filteredCommunities = communities.filter(com =>
    com.name.toUpperCase().includes(lowerCased),
  );

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
          {isSelectingCommunities && (
            <Typography variant="h6" gutterBottom className={classes.subtitle}>
              Selecione a comunidade que deseja administrar
            </Typography>
          )}
          {isSelectingCommunities && (
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
          )}
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
              >
                <CommunityCard
                  key={community.id}
                  community={community}
                  showEditOption={!isSelectingCommunities}
                  onClick={() => manageOnClick(community)}
                />
              </Grid>
            ))
          ) : (
            <Typography className={classes.emptySearch}>
              Não há resultados para essa busca: {textInput}.
            </Typography>
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

export default CommunitiesDisplayPage;
