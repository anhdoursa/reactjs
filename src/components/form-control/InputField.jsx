import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { name, form, label, disabled } = props;
  return (
    <Controller
        name={name}
        control={form.control}

        disabled={disabled}
        label={label}
        render={({field}) => {
            <>
                <input {...field} />
            </>
        }}
    />
  );
}

export default InputField;
