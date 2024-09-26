// components/Button.tsx
import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

interface Button {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: 'primary' | 'accent'; 
}

const Button: FC<Button> = ({ label, onClick, disabled = false, color = 'blue' }) => {
  const baseClasses = `mt-10 font-medium px-4 py-3 rounded-[5px]`;
  const colorClasses = disabled
    ? 'bg-gray-400 cursor-not-allowed'
    : clsx({
        'bg-primary hover:bg-primary-light focus:ring-transparent': color === 'primary',
        'bg-accent text-background hover:bg-accent-dark focus:ring-transparent': color === 'accent',
      });

  return (
    <button
      className={`${baseClasses} ${colorClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export {Button};
