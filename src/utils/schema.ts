import * as yup from 'yup';

import { countries } from '@/utils/countries';

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
  country: yup.string().oneOf(countries).required(),
  terms: yup.bool().oneOf([true]).required(),
});
