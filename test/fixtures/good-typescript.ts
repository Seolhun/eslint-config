// Good TypeScript example with proper types and imports
// Properly typed interface
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

// Properly typed function with return type
export function formatUser(user: User): string {
  return `${user.name} (${user.email})`;
}

// Properly typed arrow function
export const calculateAge = (birthYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

// Properly typed generic function
export function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

// Properly typed enum with natural sorting
export enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer',
}

// Properly typed object with sorted keys
export const defaultUser: User = {
  id: '123',
  age: 30,
  email: 'user@example.com',
  name: 'John Doe',
};
