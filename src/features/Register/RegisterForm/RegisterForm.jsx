import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function RegisterForm(props) {
  const { onSubmit } = props;
  const form = useForm({
    defaultValues: {
      user_name: 'Nguyen Van A',
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <InputField name="user_name" form={form} label="User Name" disabled={false} />
    </form>
  );
}

export default RegisterForm;
