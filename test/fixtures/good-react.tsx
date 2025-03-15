import type { ReactNode } from 'react';

import * as React from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const GoodButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = 'button', disabled, onClick }, ref) => {
    return (
      <button className={className} disabled={disabled} onClick={onClick} ref={ref} type={type}>
        {children}
      </button>
    );
  },
);

// Example of a functional component with hooks
export const ButtonWithState: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <GoodButton className={isActive ? 'active' : 'inactive'} onClick={handleClick}>
      {isActive ? 'Active' : 'Inactive'}
    </GoodButton>
  );
};
