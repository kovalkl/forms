import { useState, useEffect, forwardRef, InputHTMLAttributes } from 'react';

import styles from '@/components/UI/autocompleteInput/AutocompleteInput.module.sass';
import baseStyles from '@/components/UI/baseInput/BaseInput.module.sass';

export interface IAutocompleteInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  options: string[];
  value: string | undefined;
}

const AutocompleteInput = forwardRef<HTMLInputElement, IAutocompleteInputProps>(
  ({ id, label, options, value = '', onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    useEffect(() => {
      setFilteredOptions(
        inputValue
          ? options.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()))
          : options,
      );
    }, [inputValue, options]);

    const handleOptionClick = (option: string) => {
      setInputValue(option);
      if (onChange) {
        onChange({ target: { value: option } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div className={`${baseStyles['text-input']} ${styles['autocomplete']}`}>
        <label className={baseStyles['text-input__label']} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            if (onChange) {
              onChange(event);
            }
          }}
          {...props}
          className={`${baseStyles['text-input__input']} ${styles['autocomplete__input']}`}
        />
        <div className={styles['autocomplete__options']}>
          <ul className={styles['autocomplete__options-list']}>
            {filteredOptions.map((option) => (
              <li
                key={option}
                className={styles['autocomplete__options-item']}
                onMouseDown={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
);

export default AutocompleteInput;
