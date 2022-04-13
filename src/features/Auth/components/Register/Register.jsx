import React from 'react';
import RegisterForm from './RegisterForm/RegisterForm';

Register.propTypes = {};

function Register(props) {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;
