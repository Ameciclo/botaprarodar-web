import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import BikeService from 'modules/bicycles/services/BikeService';
import { toast } from 'shared/components';
import {
  defaultFormValues,
  RegisterBikeFormData,
  registerBikeSchema,
} from './RegisterBikeForm.schema';

const useRegisterBikeFormController = (communityId: string) => {
  const history = useHistory();
  const { handleSubmit, control } = useForm<RegisterBikeFormData>({
    mode: 'all',
    defaultValues: defaultFormValues,
    resolver: yupResolver(registerBikeSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: RegisterBikeFormData) => {
    const body = { ...values, communityId };

    setLoading(true);

    try {
      await BikeService.createBike(body);
      toast.success('Bicicleta criada com sucesso');
      onCancel();
    } catch {
      toast.error('Serviço indisponível');
      setLoading(false);
    }
  };

  const onCancel = () => {
    history.push(`/comunidades/gerenciador-de-comunidade/${communityId}`);
  };

  return {
    control,
    loading,
    onSubmit: handleSubmit(onSubmit),
    onCancel,
  };
};

export default useRegisterBikeFormController;
