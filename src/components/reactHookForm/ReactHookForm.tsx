import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, Controller } from 'react-hook-form';

import AutocompleteInput from '@/components/UI/autocompleteInput/AutocompleteInput';
import BaseInput from '@/components/UI/baseInput/BaseInput';
import Button from '@/components/UI/button/Button';
import Checkbox from '@/components/UI/checkbox/Checkbox';
import PasswordInput from '@/components/UI/passwordInput/PasswordInput';
import Select from '@/components/UI/select/Select';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FormDataType } from '@/models/types';
import { addForm } from '@/store/formsSlice';
import styles from '@/styles/Form.module.sass';
import { schema } from '@/utils/schema';

const ReactHookForm = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.list);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmitHandler = (data: FormDataType) => {
    dispatch(addForm(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
      <BaseInput
        {...register('name')}
        type="text"
        label="Name"
        id="name"
        helperText={errors.name?.message}
      />
      <BaseInput
        type="number"
        {...register('age')}
        label="Age"
        id="age"
        helperText={errors.age?.message}
      />
      <Select
        {...register('gender')}
        title="Gender"
        id="gender"
        options={['Male', 'Female', 'Prefer not to say']}
      />
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <AutocompleteInput
            label="Country"
            id="country"
            options={countries}
            value={field.value || ''}
            onChange={(e) => field.onChange(e)}
          />
        )}
      />
      <BaseInput
        type="email"
        {...register('email')}
        label="E-mail"
        id="email"
        helperText={errors.email?.message}
      />
      <PasswordInput
        {...register('password')}
        label="Password"
        id="password"
        helperText={errors.password?.message}
        textLength={watch('password')?.length}
      />
      <PasswordInput
        {...register('confirmPassword')}
        label="Confirm Password"
        id="confirmPassword"
        helperText={errors.confirmPassword?.message}
      />
      <Checkbox
        {...register('terms')}
        text="I accept the Terms and Conditions agreement"
        id="terms"
      />
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default ReactHookForm;
