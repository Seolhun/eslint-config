// Bad TypeScript example with various ESLint violations

// Using any type
export function processData(data: any): any {
  return data;
}

// Missing return type
export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Using var instead of const/let
export function badFunction() {
  const x = 10;
  const y = 20;

  // Console log without allowed methods
  console.log('This should trigger a warning');

  return x + y;
}

// Unused variable
export function unusedVars() {
  const unused = 'This variable is never used';
  return 'result';
}

// Unsorted enum
export enum Direction {
  Down = 'down',
  Left = 'left',
  Right = 'right',
  Up = 'up',
}

// Unsorted object
export const config = {
  id: 'config-1',
  enabled: true,
  name: 'Config',
  version: '1.0.0',
};

// Using == instead of ===
export function looseEquality(a: number, b: number): boolean {
  return a == b;
}

// Using ts-ignore without description
// @ts-ignore
export function ignoredFunction() {
  return 'This function has issues';
}
