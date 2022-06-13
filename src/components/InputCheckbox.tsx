import React, { useState, useEffect } from 'react';
import Message from './Message';

interface InputCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  checked: boolean;
  setChecked: (checked: boolean) => void;
  isValid?: boolean;
  validationMessage?: string;
  showMessage?: boolean;
  isRequired?: boolean;
  res?: any;
}

const InputCheckbox = ({
  id,
  name,
  label,
  checked,
  setChecked,
  isValid,
  validationMessage,
  showMessage,
  isRequired,
  ...res
}: InputCheckboxProps) => {

  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    checked && setIsTouched(true);
  }, [checked]);

  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setChecked(!checked);
  };

  console.log('InputCheckbox', {
    name,
    isValid,
  });

  return (
    <button
      className={`checkbox-wrapper ${isValid ? 'valid' : ''}`}
      onClick={handleClick}
    >
      <input
        className='checkbox'
        id={id}
        type='checkbox'
        name={name}
        checked={checked}
        readOnly
        {...res}
      />
      <label className='checkbox-label'>{label}</label>
      {validationMessage !== undefined && (
        <Message
          type='error'
          message={validationMessage}
          showMessage={(showMessage || isTouched) && !isValid}
        />
      )}
    </button>
  );
};

export default InputCheckbox;
