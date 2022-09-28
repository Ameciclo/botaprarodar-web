import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from 'shared/components/Icon/Icon';
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

  const getTexts = () => {
    if (state.type === 'withdraw') {
      setButtonText('Emprestar outra bicicleta');
      setConfirmationTitle('Empréstimo realizado!');
    }

    if (state.type === 'devolution') {
      setButtonText('Devolver outra bicicleta');
      setConfirmationTitle('Devolução realizada!');
    }
  };

  useEffect(() => {
    getTexts();
  });

  const goBack = () => {
    if (state.type === 'withdraw') {
      history.push('/comunidades/emprestar-bicicleta', {
        communityId: state.communityId,
      });
    }

    if (state.type === 'devolution') {
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
      <div className={classes.root}>
        <Icon name="confirm" description="Confirmação" />
        <p className={classes.title}>{confirmationTitle}</p>
        <Button
          data-testid="submit-button"
          type="button"
          className={classes.buttonStyle}
          disabled={false}
          onClick={() => goBack()}
        >
          {buttonText}
        </Button>
        <Button
          data-testid="submit-button"
          type="button"
          disabled={false}
          onClick={() => goToCommunityPage()}
        >
          Voltar para o início
        </Button>
      </div>
    </>
  );
};

export default BikeFinalPage;
