import React, { useEffect, useState } from 'react';
import Community from '../../models/Community/Community';
import CommunityService from '../../services/CommunityService/CommunityService';

const CommunityPage: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    CommunityService.getAllCommunities()
      .then(res => {
        setCommunities(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <ul data-testid="communities-list">
        {communities.map(community => (
          <li key={community.id}>
            <ul>
              <li>Nome: {community.name}</li>
              <li>Organizador: {community.orgName}</li>
              <li>E-mail: {community.orgEmail}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
