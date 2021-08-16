import React, { useState } from 'react';

const initialFormValues = {
  email: '',
  password: '',
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values): void => {
    const currentErrors = { ...errors };

    if ('password' in fieldValues) {
      currentErrors.password =
        fieldValues.password.length !== 0 ? '' : 'Digite sua senha';
    }

    if ('email' in fieldValues) {
      currentErrors.email = fieldValues.email ? '' : 'Digite seu e-mail';
      const emailValidation = /\S+@\S+\.\S+/;
      if (fieldValues.email) {
        currentErrors.email = emailValidation.test(fieldValues.email)
          ? ''
          : 'E-mail inválido';
      }
    }
    setErrors({
      ...currentErrors,
    });
  };

  const formIsValid = (fieldValues = values): boolean => {
    return (
      !!fieldValues.email &&
      !!fieldValues.password &&
      Object.values(errors).every(x => x === '')
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  return {
    values,
    errors,
    handleInputChange,
    formIsValid,
  };
};
