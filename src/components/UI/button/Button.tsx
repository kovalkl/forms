import { ButtonHTMLAttributes } from 'react';

import styles from '@/components/UI/button/Button.module.sass';

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
