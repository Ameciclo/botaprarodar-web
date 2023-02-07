import { useLocation } from 'react-router-dom';
import TitleBikePage from 'modules/bicycles/components/TitleBikePage/TitleBikePage';
import { EmptyStateImage } from 'shared/assets/images';
import { EmptyState, FormHeader } from 'shared/components';
import SelectBikePage from '../../components/SelectBikePage/SelectBikePage';
import { FormValues } from './ReturnBikeStepOne/ReturnBikeForm.schema';

type StateParams = {
  communityId?: string;
  formValues?: FormValues;
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
          <TitleBikePage title="Devolver bicicleta" />
          <SelectBikePage
            data-testid="SelectBikeCard"
            communityId={state.communityId || ''}
            formValues={state.formValues}
            actionType="devolution"
          />
        </>
      )}
    </>
  );
};

export default ReturnBikePage;
