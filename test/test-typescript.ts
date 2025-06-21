// Test TypeScript file with various patterns

// Import sorting test
import type { ReactNode } from 'react';

import fs from 'fs';
import path from 'path';

import type { LocalType } from './types.js';

import localModule from './local.js';

// Enum sorting test
enum Colors {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}

// Interface with object sorting
interface UserProfile {
  id: string;
  type: 'admin' | 'user';
  scales: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  intents: 'primary' | 'secondary';
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Class sorting test
class UserService {
  static readonly API_URL = '/api/users';

  private apiKey: string;

  public timeout: number;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.timeout = 5000;
  }

  static createDefaultUser(): UserProfile {
    return {
      id: '0',
      type: 'user',
      intents: 'primary',
      scales: 'md',
      age: 0,
      email: 'default@example.com',
      isActive: false,
      name: 'Default User',
    };
  }

  private validateApiKey(): boolean {
    return this.apiKey.length > 0;
  }

  async getUser(id: string): Promise<UserProfile> {
    if (!this.validateApiKey()) {
      throw new Error('Invalid API key');
    }
    // Implementation here
    return UserService.createDefaultUser();
  }
}

// Export sorting test
export { Colors };
export { UserService };
export type { UserProfile };
export default UserService;
