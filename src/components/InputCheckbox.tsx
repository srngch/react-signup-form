import React, { useEffect } from 'react';

interface InputCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  isValid?: boolean;
  setIsValid?: (isValid: boolean) => void;
  validation?: (value: boolean) => boolean;
  validationMessage?: string;
  showMessage?: boolean;
  isRequired?: boolean;
  res?: any;
};

const Input = ({
  id, name, label, checked, setChecked,
  isValid, setIsValid,
  validation, validationMessage, showMessage,
  isRequired,
  ...res
}: InputCheckboxProps) => {
  useEffect(() => {
    if (validation) {
      validation(checked) && setIsValid?.(true);
    }
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    setChecked(checked);
  };

  return (
    <div className={`input-wrapper ${isValid ? 'valid' : ''}`}>
      <input
        id={id}
        type='checkbox'
        name={name}
        checked={checked}
        onChange={handleChange}
        {...res}
      />
      <label className='form-check-label' htmlFor={id}>{label}</label>
      {showMessage && !isValid && <div className='error'>{validationMessage}</div>}
    </div>
  );
}

export default Input;
