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
  const handleClick = (event:React.FormEvent<HTMLButtonElement>) => {
    setChecked(!checked);
    if (validation) {
      setIsValid?.(validation(!checked));
    }
  }

  return (
    <button className={`checkbox-wrapper ${isValid ? 'valid' : ''}`} onClick={handleClick}>
        <input
          className='checkbox'
          id={id}
          type='checkbox'
          name={name}
          checked={checked}
          defaultChecked={checked}
          {...res}
        />
        <label className='checkbox-label'>{label}</label>
      <Message
        type='error'
        message={validationMessage}
        showMessage={showMessage && !isValid}
      />
    </button>
  );
}

export default InputCheckbox;
