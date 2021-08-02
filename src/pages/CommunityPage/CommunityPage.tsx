import React, { useEffect, useState } from 'react';
import ComunityComponent from '../../components/Community';
import Community from '../../models/Community/Community';
import CommunityService from '../../services/CommunityService/CommunityService';

const CommunityPage: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    CommunityService.getAllCommunities();
    setCommunities([
      {
        name: 'Comunidade 1',
        description: 'Isso é uma comunidade',
        address: 'Rua dos bobos',
      },
    ]);
  }, []);

  return (
    <div>
      <ul data-testid="communities-list">
        {communities.map(community => (
          <li key={community.name}>
            <ComunityComponent {...community} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
