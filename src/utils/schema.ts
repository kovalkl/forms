import * as yup from 'yup';

import { countries } from '@/utils/countries';

const MAX_FILE_SIZE_BYTES = 1048576;

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'Name must start with a capital letter')
    .required(),
  age: yup.number().typeError('Age must be a number').positive().required(),
  gender: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, 'Password must contain a lowercase letter')
    .matches(/(?=.*[A-Z])/, 'Password must contain an uppercase letter')
    .matches(/(?=.*[0-9])/, 'Password must contain a number')
    .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a special character (e.g. !@#$%^&*)')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
  country: yup.string().oneOf(countries, 'Country must be selected of the list').required(),
  terms: yup.bool().oneOf([true], 'Terms must be accepted').required(),
  image: yup
    .mixed<File>()
    .test('fileSize', 'File must be 1 MB or smaller', (value) =>
      value ? value.size <= MAX_FILE_SIZE_BYTES : true,
    )
    .test('fileType', 'Unsupported file format', (value) =>
      value ? ['image/jpeg', 'image/png'].includes(value.type) : true,
    )
    .test('fileExtension', 'Only JPEG(JPG) and PNG formats', (value) => {
      if (value) {
        const fileExtension = value.name.split('.').pop()?.toLowerCase();
        return ['jpeg', 'jpg', 'png'].includes(fileExtension || '');
      }
      return true;
    })
    .required(),
});
