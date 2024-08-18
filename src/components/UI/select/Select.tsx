import { SelectHTMLAttributes, forwardRef } from 'react';

import styles from '@/components/UI/select/Select.module.sass';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: string[];
  id: string;
  helperText?: string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ title, options, id, helperText, ...props }, ref) => {
    return (
      <div className={styles['select']}>
        <label htmlFor={id} className={styles['select__label']}>
          {title}
        </label>
        <div className={styles['select__wrapper']}>
          <select
            id={id}
            ref={ref}
            title={title}
            className={styles['select__element']}
            {...props}
            defaultValue={options[0]}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className={styles['select__arrow']} />
        </div>
        <span className={styles['select__helper']}>{helperText}</span>
      </div>
    );
  },
);

export default Select;
