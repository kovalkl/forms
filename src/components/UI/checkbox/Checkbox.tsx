import { forwardRef, InputHTMLAttributes } from 'react';

import styles from '@/components/UI/checkbox/Checkbox.module.sass';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
  helperText?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ text, id, helperText, ...props }, ref) => {
    return (
      <label htmlFor={id} className={styles['checkbox']}>
        <input className={styles['checkbox__input']} type="checkbox" ref={ref} id={id} {...props} />
        {text}
        <span className={styles['checkbox__helper']}>{helperText}</span>
      </label>
    );
  },
);

export default Checkbox;
