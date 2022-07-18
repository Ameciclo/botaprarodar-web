import { useHistory } from 'react-router-dom';
import CommunitiesDisplayPage from './CommunitiesDisplay/CommunitiesDisplayPage';

const CommunityPage: React.FC = () => {
  const history = useHistory();
  const isSelectingCommunities = () => {
    return history.location.pathname === '/selecao-de-comunidades';
  };

  return (
    <>
      <CommunitiesDisplayPage
        isSelectingCommunities={isSelectingCommunities()}
      />
    </>
  );
};

export default CommunityPage;
