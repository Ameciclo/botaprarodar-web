import { useHistory } from 'react-router-dom';
import CommunityManagementPage from './CommunityManagementPage/CommunityManagementPage';
import CommunitySelectionPage from './CommunitySelectionPage/CommunitySelectionPage';

const CommunityPage: React.FC = () => {
  const history = useHistory();
  const isSelectingCommunities = () => {
    return history.location.pathname === '/selecao-de-comunidades';
  };

  return (
    <>
      {isSelectingCommunities() ? (
        <CommunitySelectionPage />
      ) : (
        <CommunityManagementPage />
      )}
    </>
  );
};

export default CommunityPage;
