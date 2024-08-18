import { useLocation } from 'react-router-dom';

import FormItem from '@/components/formItem/FormItem';
import styles from '@/components/formList/FormList.module.sass';
import { FormDataWithBase64 } from '@/models/types';

const FormList = ({ forms }: { forms: FormDataWithBase64[] }) => {
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
