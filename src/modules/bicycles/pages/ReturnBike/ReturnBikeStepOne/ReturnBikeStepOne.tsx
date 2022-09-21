import { useLocation } from 'react-router-dom';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';

type StateParams = {
  communityId?: string;
  selectedBike?: string;
};

const ReturnBikeStepOne: React.FC = () => {
  const location = useLocation();
  const state = location.state as StateParams;
  const hasParams = !!state?.communityId && !!state?.selectedBike;
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
            link="/comunidades/devolver-bicicleta"
            title="Voltar"
            state={{ communityId: state.communityId }}
          />
        </>
      )}
    </>
  );
};

export default ReturnBikeStepOne;
