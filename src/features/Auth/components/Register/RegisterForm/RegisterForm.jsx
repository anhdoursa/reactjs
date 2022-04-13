import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from 'components/form-control/InputField';

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
