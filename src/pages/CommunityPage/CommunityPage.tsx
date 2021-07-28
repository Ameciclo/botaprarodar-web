import React, { useEffect, useState } from 'react';
export interface CommunityInterface {
  name: string;
  description: string;
  address: string;
}

const CommunityPage: React.FC<{ props: CommunityInterface[] }> = ({
  props,
}) => {
  const [communities, setCommunities] = useState<CommunityInterface[]>(props);

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
