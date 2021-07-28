import React, { useEffect, useState } from 'react';
interface Community {
  name: string;
  description: string;
  address: string;
}

const CommunityPage: React.FC<{ props: Community[] }> = ({ props }) => {
  const [communities, setCommunities] = useState<Community[]>(props);

  useEffect(() => {
    setCommunities(props);
  }, [props]);

  return (
    <div>
      <ul data-testid="communities-list">
        {communities.map((community, index) => (
          <li key={index}>community.name</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
