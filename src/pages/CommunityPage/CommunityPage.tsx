import React, { useState } from 'react';
interface Communities {
  Community: {
    name: string;
  }[];
}

const CommunityPage: React.FC<{ props: string[] }> = ({ props }) => {
  const [communities, setCommunities] = useState<Communities>();

  return (
    <div>
      <ul data-testid="communities-list">
        <li>Community 1</li>
      </ul>
    </div>
  );
};

export default CommunityPage;
