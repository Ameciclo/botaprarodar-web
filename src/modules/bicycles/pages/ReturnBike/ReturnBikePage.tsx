import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
import SelectBikePage from '../../components/SelectBikePage/SelectBikePage';

type StateParams = {
  communityId?: string;
};

const ReturnBikePage: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const hasParams = !!state?.communityId;

  return (
    <>
      {!hasParams && (
        <EmptyState
          imgSrc={EmptyStateImage}
          heading="Opss!"
          subheading="Página não encontrada"
        />
      )}

      {hasParams && (
        <>
          <FormHeader
            link={`/comunidades/gerenciador-de-comunidade/${state.communityId}`}
            title="Voltar"
          />
          <SelectBikePage
            data-testId="SelectBikeCard"
            communityId={state.communityId || ''}
            actionType="devolution"
          />
        </>
      )}
    </>
  );
};

export default ReturnBikePage;
