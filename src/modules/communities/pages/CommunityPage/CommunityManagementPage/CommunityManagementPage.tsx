import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommunityService from 'modules/communities/services/CommunityService';
import Community from 'modules/communities/models/Community';

const CommunityManagementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [community, setCommunity] = useState<Community>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      CommunityService.getCommunityById(id)
        .then(res => {
          setCommunity(res);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return <div>{community?.name}</div>;
};

export default CommunityManagementPage;
