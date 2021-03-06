import React, { useState, useEffect } from 'react';
import Message from './Message';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: (value: string) => void;
  isValid?: boolean;
  setIsValid?: (isValid: boolean) => void;
  validation?: (value: string) => boolean;
  validationMessage?: {
    required?: string;
    format?: string;
    duplicated?: string;
  };
  showMessage?: boolean;
  isRequired?: boolean;
  helpMessage?: string;
  res?: any;
};

const Input = ({
  name, label, type, value, setValue,
  isValid, setIsValid,
  validation, validationMessage, showMessage,
  isRequired, helpMessage,
  ...res
}: InputProps) => {
  const [showHelp, setShowHelp] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (validation) {
      const isValid = validation(value);
      if (isValid === true) {
        setIsValid?.(true);
        setShowHelp(false);
      }
      if (value.length !== 0 && isValid === false) {
        setShowHelp(true);
      }
    }
  }, [value, isValid]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
  };

  const handleFocus = () => {
    setShowHelp(true);
  }

  const handleBlur = () => {
    setShowHelp(false);
    setIsTouched(true);
    if (validation) {
      const isValid = validation(value);
      console.log(`name: ${name}, value: ${value}, isValid: ${isValid}`);
      setIsValid?.(isValid);
    }
  };

  return (
    <div className={`input-wrapper ${isValid ? 'valid' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {isRequired && <abbr className='input-label-required' title='required'>*</abbr>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...res}
      />
      <Message
        type='help'
        message={helpMessage}
        showMessage={showHelp}
      />
      <Message
        type='error'
        message={validationMessage?.required}
        showMessage={(showMessage || isTouched) && value.length === 0 && isRequired}
      />
      <Message
        type='error'
        message={validationMessage?.format}
        showMessage={(showMessage || isTouched) && value.length !== 0 && !isValid}
      />
    </div>
  );
}

export default Input;
