#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Testing ESLint configuration locally...${NC}"

# Create a temporary directory
TEMP_DIR=$(mktemp -d)
echo -e "${BLUE}Created temporary directory: ${TEMP_DIR}${NC}"

# Copy package files to temp directory
cp package.json $TEMP_DIR/
cp index.js $TEMP_DIR/
cp prettier.config.js $TEMP_DIR/
cp .eslintrc.js $TEMP_DIR/
cp tsconfig.json $TEMP_DIR/
cp tsconfig.eslint.json $TEMP_DIR/

# Create a simple test project structure
mkdir -p $TEMP_DIR/src

# Create a simple React component
cat > $TEMP_DIR/src/TestComponent.tsx << 'EOL'
import * as React from 'react';

type TestProps = {
  name: string;
};

export const TestComponent: React.FC<TestProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
EOL

# Create a simple TypeScript file
cat > $TEMP_DIR/src/utils.ts << 'EOL'
export function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
EOL

# Create a test .eslintrc.js file that extends our config
cat > $TEMP_DIR/.eslintrc.js << 'EOL'
module.exports = {
  extends: ['.'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};
EOL

# Navigate to temp directory
cd $TEMP_DIR

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install --silent typescript@5 eslint@8 prettier@3 react@18 @types/react@18

# Run ESLint
echo -e "${BLUE}Running ESLint on test files...${NC}"
./node_modules/.bin/eslint --ext .js,.jsx,.ts,.tsx ./src

# Check the exit code
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ ESLint passed with no errors!${NC}"
else
  echo -e "${RED}❌ ESLint found errors. Please check the configuration.${NC}"
fi

# Clean up
echo -e "${BLUE}Cleaning up temporary directory...${NC}"
cd -
rm -rf $TEMP_DIR

echo -e "${BLUE}Test completed.${NC}"