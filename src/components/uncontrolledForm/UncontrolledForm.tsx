import * as yup from 'yup';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AutocompleteInput from '@/components/UI/autocompleteInput/AutocompleteInput';
import BaseInput from '@/components/UI/baseInput/BaseInput';
import Button from '@/components/UI/button/Button';
import Checkbox from '@/components/UI/checkbox/Checkbox';
import ImageInput from '@/components/UI/imageInput/ImageInput';
import PasswordInput from '@/components/UI/passwordInput/PasswordInput';
import Select from '@/components/UI/select/Select';
import { getFieldValue } from '@/components/uncontrolledForm/getFieldValue';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { FormDataType } from '@/models/types';
import { addForm } from '@/store/formsSlice';
import styles from '@/styles/Form.module.sass';
import { convertFileToBase64 } from '@/utils/convertFileToBase64';
import { schema } from '@/utils/schema';

const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.list);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const validateForm = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    const data: FormDataType = {
      name: getFieldValue({ formData, key: 'name' }),
      age: Number(formData.get('age')) || 0,
      gender: getFieldValue({ formData, key: 'gender' }),
      country: getFieldValue({ formData, key: 'country' }),
      email: getFieldValue({ formData, key: 'email' }),
      password: getFieldValue({ formData, key: 'password' }),
      confirmPassword: getFieldValue({ formData, key: 'confirmPassword' }),
      terms: formData.get('terms') === 'on',
      image: imageFile || null,
    };

    schema
      .validate(data, { abortEarly: false })
      .then(async () => {
        setErrors({});
        formRef.current?.reset();
        dispatch(addForm({ ...data, image: await convertFileToBase64(imageFile!) }));
        navigate('/', { state: { success: true } });
      })
      .catch((err) => {
        const formErrors = err.inner.reduce(
          (acc: { [key: string]: string }, error: yup.ValidationError) => {
            acc[error.path!] = error.message;
            return acc;
          },
          {},
        );
        setErrors(formErrors);
      });
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <form ref={formRef} onSubmit={onSubmitHandler} className={styles.form}>
      <BaseInput type="text" label="Name" id="name" name="name" helperText={errors.name} />
      <BaseInput type="number" label="Age" id="age" name="age" helperText={errors.age} />
      <Select
        title="Gender"
        id="gender"
        name="gender"
        options={['Male', 'Female', 'Prefer not to say']}
      />
      <AutocompleteInput
        label="Country"
        id="country"
        name="country"
        options={countries}
        helperText={errors.country}
      />
      <BaseInput type="email" label="E-mail" id="email" name="email" helperText={errors.email} />
      <PasswordInput label="Password" id="password" name="password" helperText={errors.password} />
      <PasswordInput
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        helperText={errors.confirmPassword}
      />
      <Checkbox
        text="I accept the Terms and Conditions agreement"
        id="terms"
        name="terms"
        helperText={errors.terms}
      />
      <ImageInput label="Image" id="image" helperText={errors.image} onChange={handleImageChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UncontrolledForm;
