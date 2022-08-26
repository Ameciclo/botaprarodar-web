import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EmptyStateImage } from 'shared/assets/images';
import Community from 'modules/communities/models/Community';
import CommunityService from 'modules/communities/services/CommunityService';
import { EmptyState, Loading } from 'shared/components';
import FormHeader from 'shared/components/FormHeader/FormHeader';
import CommunityForm from '../components/CommunityForm/CommunityForm';
import useStyles from './EditCommunityPage.styles';

const EditCommunityPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      CommunityService.getCommunityById(id)
        .then(res => {
          setCommunity(res);
        })
        .catch(() => {
          toast.error('Serviço indisponível');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      {community && (
        <div className={classes.root}>
          <FormHeader
            link={`/comunidades/gerenciador-de-comunidade/${id}`}
            title={`Editar ${community?.name}`}
          />
          {loading ? (
            <Loading />
          ) : (
            <>
              <CommunityForm community={community} />
            </>
          )}
        </div>
      )}
      {!community && (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Opss!"
          subheading="Serviço indisponível"
        />
      )}
    </>
  );
};

export default EditCommunityPage;
