type GetFieldValueProps = {
  formData: FormData;
  key: string;
};

export const getFieldValue = ({ formData, key }: GetFieldValueProps): string => {
  const value = formData.get(key);
  return typeof value === 'string' ? value : '';
};
