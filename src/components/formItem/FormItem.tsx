import styles from '@/components/formItem/FormItem.module.sass';
import { FormDataWithBase64 } from '@/models/types';

type FormItemType = {
  form: FormDataWithBase64;
  isSuccess: boolean;
};

const FormItem = ({ form, isSuccess }: FormItemType) => {
  return (
    <li className={`${styles['form-item']} ${isSuccess ? styles['form-item_success'] : ''}`}>
      <ul>
        <li>
          <strong>Name:</strong> {form.name}
        </li>
        <li>
          <strong>Age:</strong> {form.age}
        </li>
        <li>
          <strong>Gender:</strong> {form.gender}
        </li>
        <li>
          <strong>E-mail:</strong> {form.email}
        </li>
        <li>
          <strong>Country:</strong> {form.country}
        </li>
        <li>
          <strong>Password:</strong> {form.password}
        </li>
        <li>
          <strong>Terms Accepted:</strong> {form.terms ? 'Yes' : 'No'}
        </li>
      </ul>
      <img className={styles['form-item__image']} src={form.image} alt={form.name} />
    </li>
  );
};

export default FormItem;
