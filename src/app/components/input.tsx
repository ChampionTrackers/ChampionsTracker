'use client'
import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({type = 'text', placeholder = '', onChange }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <input className='bg-secondary w-96 border-transparent focus:border-transparent focus:ring-transparent rounded-[5px]'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export {Input};