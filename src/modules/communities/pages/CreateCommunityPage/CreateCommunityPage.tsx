import React from 'react';
import FormHeader from 'shared/components/FormHeader/FormHeader';
import CommunityForm from '../components/CommunityForm/CommunityForm';
import useStyles from './CreateCommunityPage.styles';

const CreateCommunityPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormHeader link="/selecao-de-comunidades" title="Cadastrar comunidade" />
      <>
        <CommunityForm />
      </>
    </div>
  );
};

export default CreateCommunityPage;
