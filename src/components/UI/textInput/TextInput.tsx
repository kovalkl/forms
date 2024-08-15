import { InputHTMLAttributes } from 'react';

import styles from '@/components/UI/textInput/TextInput.module.sass';

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label: string;
  helperText?: string;
}

const TextInput = ({ id, label, error, helperText, ...props }: ITextInputProps) => {
  return (
    <div className={styles['text-input']}>
      <label className={styles['text-input__label']} htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        {...props}
        className={`${styles['text-input__input']} ${error ? 'text-input-error' : ''}`}
      />
      <span className={styles['text-input__helper']}>{helperText ? helperText : ''}</span>
    </div>
  );
};

export default TextInput;
