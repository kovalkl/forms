import { SelectHTMLAttributes } from 'react';

import styles from '@/components/UI/select/Select.module.sass';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: string[];
}

const Select = ({ title, options, ...props }: ISelectProps) => {
  return (
    <div className={styles['select-container']}>
      <label htmlFor={props.id} className={styles['select-label']}>
        {title}
      </label>
      <div className={styles['select-wrapper']}>
        <select
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
};

export default Select;
