import React from 'react';
import Message from './Message';
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

const InputCheckbox = ({
  id, name, label, checked, setChecked,
  isValid, setIsValid,
  validation, validationMessage, showMessage,
  isRequired,
  ...res
}: InputCheckboxProps) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget;
    setChecked(checked);
    if (validation) {
      setIsValid?.(validation(checked));
    }
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
      <Message
        type='error'
        message={validationMessage}
        showMessage={showMessage && !isValid}
      />
    </div>
  );
}

export default InputCheckbox;
