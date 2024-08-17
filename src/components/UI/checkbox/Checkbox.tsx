import { forwardRef, InputHTMLAttributes } from 'react';

import styles from '@/components/UI/checkbox/Checkbox.module.sass';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(({ text, id, ...props }, ref) => {
  return (
    <label htmlFor={id} className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" ref={ref} id={id} {...props} />
      {text}
    </label>
  );
});

export default Checkbox;
