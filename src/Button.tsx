import * as React from 'react';

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export const Button = React.forwardRef<ElementType, ElementProps>(({ children, ...others }, ref) => {
  return (
    <button ref={ref} {...others}>
      {children}
    </button>
  );
});
