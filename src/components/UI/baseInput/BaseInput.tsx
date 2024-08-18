import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import styles from '@/components/UI/baseInput/BaseInput.module.sass';

export interface IBaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label: string;
  id: string;
  helperText?: string;
  children?: ReactNode;
}

const BaseInput = forwardRef<HTMLInputElement, IBaseInputProps>(
  ({ id, label, error, helperText, children, ...props }, ref) => {
    return (
      <div className={styles['text-input']}>
        <label className={styles['text-input__label']} htmlFor={id}>
          {label}
        </label>
        <div className={styles['text-input__input-wrapper']}>
          <input
            id={id}
            ref={ref}
            {...props}
            className={`${styles['text-input__input']} ${error ? styles.error : ''}`}
          />
          {children}
        </div>
        <span className={styles['text-input__helper']}>{helperText}</span>
      </div>
    );
  },
);

export default BaseInput;
