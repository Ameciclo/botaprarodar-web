import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import BikeService from 'modules/bicycles/services/BikeService';
import { toast } from 'shared/components';
import {
  defaultFormValues,
  RegisterBikeFormData,
} from './RegisterBikeForm.schema';

const useRegisterBikeFormController = (communityId: string) => {
  const history = useHistory();
  const { handleSubmit, control } = useForm<RegisterBikeFormData>({
    defaultValues: defaultFormValues,
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

  const validateInputEmpty = (text: string) => {
    if (text.trim() === '') return 'Este campo não pode ser vazio';
    return true;
  };

  const validateInputNumberEmpty = (text: number) => {
    if (text <= 0) return 'Este campo deve ser maior que 0';
    return true;
  };

  const validateFileInputEmpty = (file: File | null) => {
    if (!file) return 'Este campo não pode ser vazio';
    return true;
  };

  return {
    control,
    loading,
    validateInputEmpty,
    validateInputNumberEmpty,
    validateFileInputEmpty,
    onSubmit: handleSubmit(onSubmit),
    onCancel,
  };
};

export default useRegisterBikeFormController;
