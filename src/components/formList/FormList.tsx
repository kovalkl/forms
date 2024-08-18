import { useLocation } from 'react-router-dom';

import FormItem from '@/components/formItem/FormItem';
import styles from '@/components/formList/FormList.module.sass';
import { FormDataType } from '@/models/types';

const FormList = ({ forms }: { forms: FormDataType[] }) => {
  const location = useLocation();
  const isSuccess = location.state?.success;

  return (
    <ul className={styles['form-list']}>
      {forms.map((form, index) => (
        <FormItem key={index} form={form} isSuccess={isSuccess && index === forms.length - 1} />
      ))}
    </ul>
  );
};

export default FormList;
