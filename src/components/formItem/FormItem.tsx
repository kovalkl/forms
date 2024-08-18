import styles from '@/components/formItem/FormItem.module.sass';
import { FormDataType } from '@/models/types';

type FormItemType = {
  form: FormDataType;
  isSuccess: boolean;
};

const FormItem = ({ form, isSuccess }: FormItemType) => {
  return (
    <li className={`${styles['form-item']} ${isSuccess ? styles['form-item_success'] : ''}`}>
      <div className={styles['form-item__main-info']}>
        <p>
          <strong>Name:</strong> {form.name}
        </p>
        <p>
          <strong>Age:</strong> {form.age}
        </p>
        <p>
          <strong>Gender:</strong> {form.gender}
        </p>
      </div>
      <p>
        <strong>E-mail:</strong> {form.email}
      </p>
      <p>
        <strong>Country:</strong> {form.country}
      </p>
      <p>
        <strong>Password:</strong> {form.password}
      </p>
      <p>
        <strong>Terms Accepted:</strong> {form.terms ? 'Yes' : 'No'}
      </p>
    </li>
  );
};

export default FormItem;
