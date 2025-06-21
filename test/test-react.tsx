// Test React TypeScript file

import type { FC, ReactNode } from 'react';

import React, { useState } from 'react';

import type { ButtonProps } from './types.js';

// React component with props sorting
interface TestComponentProps {
  children: ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  id: string;
  type: 'button' | 'submit';
  scales: 'lg' | 'md' | 'sm';
  intents: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

const TestComponent: FC<TestComponentProps> = ({
  children,
  className,
  ref,
  id,
  type,
  intents,
  scales,
  disabled,
  onClick,
}) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick?.();
  };

  return (
    <div ref={ref} id={id} className={className} onClick={handleClick}>
      <button type={type} disabled={disabled}>
        {children} - Count: {count}
      </button>
    </div>
  );
};

// Component without display name (should trigger rule)
const AnotherComponent = () => <div>Anonymous Component</div>;

export { AnotherComponent };
export { TestComponent };
export default TestComponent;
