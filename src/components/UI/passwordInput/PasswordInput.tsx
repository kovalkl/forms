import { forwardRef, Ref } from 'react';

import BaseInput, { IBaseInputProps } from '@/components/UI/baseInput/BaseInput';
import styles from '@/components/UI/passwordInput/PasswordInput.module.sass';

interface PasswordInputProps extends IBaseInputProps {
  textLength?: number;
}

const OPTIMAL_PASSWORD_LENGTH = 8;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ textLength = 0, ...props }, ref: Ref<HTMLInputElement>) => {
    const getProgressBarClassName = () => {
      if (textLength < 1) return '';
      if (textLength / OPTIMAL_PASSWORD_LENGTH < 0.33) return styles.progressBar_weak;
      if (textLength / OPTIMAL_PASSWORD_LENGTH < 0.66) return styles.progressBar_medium;
      return styles.progressBar_strong;
    };

    return (
      <div className={styles.container}>
        <BaseInput {...props} ref={ref} type="password">
          {textLength > 0 && (
            <div className={`${styles.progressBar} ${getProgressBarClassName()}`} />
          )}
        </BaseInput>
      </div>
    );
  },
);

export default PasswordInput;
