import { SelectHTMLAttributes, forwardRef } from 'react';

import styles from '@/components/UI/select/Select.module.sass';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: string[];
  id: string;
}

const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ title, options, id, ...props }, ref) => {
    return (
      <div className={styles['select-container']}>
        <label htmlFor={id} className={styles['select-label']}>
          {title}
        </label>
        <div className={styles['select-wrapper']}>
          <select
            id={id}
            ref={ref}
            title={title}
            className={styles['select-element']}
            {...props}
            defaultValue={options[0]}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className={styles['select-arrow']} />
        </div>
      </div>
    );
  },
);

export default Select;
