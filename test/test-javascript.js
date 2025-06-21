// Test JavaScript file with various patterns

// Import sorting test
import fs from 'fs';
import path from 'path';

import localModule from './local.js';

// Object sorting test
const config = {
  id: '123',
  type: 'user',
  intents: 'primary',
  scales: 'md',
  active: true,
  email: 'test@example.com',
  name: 'Test User',
};

// Class sorting test
class TestClass {
  static staticProp = 'static';

  #privateProp = 'private';

  publicProp = 'public';

  constructor() {
    this.publicProp = 'initialized';
  }

  static staticMethod() {
    return 'static method';
  }

  #privateMethod() {
    return 'private method';
  }

  publicMethod() {
    // Use private members to avoid linting errors
    console.log(this.#privateProp);
    this.#privateMethod();
    return 'public method';
  }
}

// Export sorting test
export { config };
export { TestClass };
export default TestClass;
