export type FormDataType = {
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  country: string;
  confirmPassword: string;
  terms: boolean;
  image: File | null;
};

export type FormDataWithBase64 = Omit<FormDataType, 'image'> & {
  image: string;
};
