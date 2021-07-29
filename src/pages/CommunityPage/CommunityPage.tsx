import React, { useEffect, useState } from 'react';
import Community from '../../components/Community';

export interface CommunityInterface {
  name: string;
  description: string;
  address: string;
}

const CommunityPage: React.FC = () => {
  const [communities, setCommunities] = useState<CommunityInterface[]>([]);

  useEffect(() => {
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
            <Community {...community} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
