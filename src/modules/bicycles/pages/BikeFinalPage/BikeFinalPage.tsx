import { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from 'shared/components/Icon/Icon';
import { EmptyState } from 'shared/components';
import { EmptyStateImage } from 'shared/assets/images';
import useStyles from './BikeFinalPage.styles';

type StateParams = {
  communityId: string;
  type: string;
};

const BikeFinalPage: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const state = location.state as StateParams;
  const classes = useStyles();
  const [buttonText, setButtonText] = useState('');
  const [confirmationTitle, setConfirmationTitle] = useState('');
  const hasParams = !!state?.type;

  const getTexts = () => {
    if (state?.type === 'withdraw') {
      setButtonText('Emprestar outra bicicleta');
      setConfirmationTitle('Empréstimo realizado!');
    }

    if (state?.type === 'devolution') {
      setButtonText('Devolver outra bicicleta');
      setConfirmationTitle('Devolução realizada!');
    }
  };

  useEffect(() => {
    getTexts();
  });

  const goBack = () => {
    if (state?.type === 'withdraw') {
      history.push('/comunidades/emprestar-bicicleta', {
        communityId: state.communityId,
      });
    }

    if (state?.type === 'devolution') {
      history.push('/comunidades/devolver-bicicleta', {
        communityId: state.communityId,
      });
    }
  };

  const goToCommunityPage = () => {
    history.push(`/comunidades/gerenciador-de-comunidade/${state.communityId}`);
  };

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
        <Card>
          <CardContent>
            <div className={classes.root}>
              <Icon name="confirm" description="Confirmação" />
              <p className={classes.title}>{confirmationTitle}</p>
              <Button
                data-testid="again"
                type="button"
                className={classes.buttonStyle}
                disabled={false}
                onClick={() => goBack()}
              >
                {buttonText}
              </Button>
              <Button
                data-testid="goback-community"
                type="button"
                disabled={false}
                onClick={() => goToCommunityPage()}
              >
                Voltar para o início
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default BikeFinalPage;
