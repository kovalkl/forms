import FormList from '@/components/formList/FormList';
import styles from '@/components/main/Main.module.sass';
import { useAppSelector } from '@/hooks/useAppSelector';

const Main = () => {
  const formsData = useAppSelector((state) => state.forms.list);
  return (
    <main className={styles.main}>
      <h1 className={styles['main__title']}>Forms</h1>
      {formsData.length ? <FormList forms={formsData} /> : <h2>No data</h2>}
    </main>
  );
};

export default Main;
