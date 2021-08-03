import React from 'react';

interface CommunityProps {
  name: string;
  description: string;
  address: string;
}
const Community: React.FC<CommunityProps> = ({
  name,
  description,
  address,
}) => {
  return (
    <div>
      <span data-testid="community-name">Nome: {name}</span>
      <span>Descrição: {description}</span>
      <span>Endereço: {address}</span>
    </div>
  );
};

export default Community;
