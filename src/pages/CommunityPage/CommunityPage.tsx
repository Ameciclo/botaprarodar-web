import React, { useEffect, useState } from 'react';
interface Communities {
  Community: {
    name: string;
  }[];
}

const CommunityPage: React.FC<{ props: string[] }> = ({ props }) => {
  const [communities, setCommunities] = useState<string[]>(props);

  useEffect(() => {
    setCommunities(props);
  }, [props]);

  return (
    <div>
      <ul data-testid="communities-list">
        {communities.map((community, index) => (
          <li key={index}>community</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityPage;
