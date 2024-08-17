import { useState, useEffect, forwardRef, InputHTMLAttributes } from 'react';

import styles from '@/components/UI/autocompleteInput/AutocompleteInput.module.sass';
import baseStyles from '@/components/UI/baseInput/BaseInput.module.sass';

export interface IAutocompleteInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  options: string[];
  text: string | undefined;
}

const AutocompleteInput = forwardRef<HTMLInputElement, IAutocompleteInputProps>(
  ({ id, label, options, text, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(text || '');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    useEffect(() => {
      setInputValue(text || '');
    }, [text]);

    useEffect(() => {
      if (inputValue) {
        const filtered = options.filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase()),
        );
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions(options);
      }
    }, [inputValue, options]);

    const handleOptionClick = (option: string) => {
      setInputValue(option);
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
          onChange={(event) => setInputValue(event.target.value)}
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
