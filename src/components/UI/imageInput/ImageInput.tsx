import { forwardRef } from 'react';

import styles from '@/components/UI/imageInput/ImageInput.module.sass';

interface IImageInputProps {
  label: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
}

const ImageInput = forwardRef<HTMLInputElement, IImageInputProps>(
  ({ label, id, onChange, helperText, ...props }, ref) => (
    <div className={styles['image']}>
      <label htmlFor={id} className={styles['image__label']}>
        {label}
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id={id}
        ref={ref}
        onChange={onChange}
        {...props}
      />
      <span className={styles['image__helper']}>{helperText}</span>
    </div>
  ),
);

export default ImageInput;
