#!/usr/bin/env node

const chalk = require('chalk');
const { ESLint } = require('eslint');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log(chalk.blue('Testing ESLint configuration...'));

  // Create ESLint instance
  const eslint = new ESLint({
    cwd: path.resolve(__dirname, '..'),
    useEslintrc: true,
  });

  // Get fixtures directory
  const fixturesDir = path.join(__dirname, 'fixtures');

  // Get all test files
  const testFiles = fs
    .readdirSync(fixturesDir)
    .filter((file) => file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx'))
    .map((file) => path.join(fixturesDir, file));

  if (testFiles.length === 0) {
    console.log(chalk.yellow('No test files found in fixtures directory.'));
    process.exit(1);
  }

  console.log(chalk.blue(`Found ${testFiles.length} test files.`));

  // Lint files
  const results = await eslint.lintFiles(testFiles);

  // Check if we have expected errors
  let hasUnexpectedResults = false;
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const result of results) {
    const { errorCount, filePath, messages, warningCount } = result;
    const fileName = path.basename(filePath);

    console.log(chalk.blue(`\nLinting ${fileName}:`));
    console.log(`  Errors: ${errorCount}, Warnings: ${warningCount}`);

    totalErrors += errorCount;
    totalWarnings += warningCount;

    // Check if file should have errors (bad-*.js/ts/tsx should have errors)
    const shouldHaveErrors = fileName.startsWith('bad-');

    if (shouldHaveErrors && errorCount === 0) {
      console.log(chalk.red(`  ❌ Expected errors in ${fileName} but found none!`));
      hasUnexpectedResults = true;
    } else if (!shouldHaveErrors && errorCount > 0) {
      console.log(chalk.red(`  ❌ Expected no errors in ${fileName} but found ${errorCount}!`));
      hasUnexpectedResults = true;
    } else {
      console.log(chalk.green(`  ✅ ${shouldHaveErrors ? 'Found expected errors' : 'No errors as expected'}`));
    }

    // Print messages
    if (messages.length > 0) {
      console.log(chalk.blue('  Messages:'));
      messages.forEach((msg) => {
        const prefix = msg.severity === 2 ? chalk.red('Error') : chalk.yellow('Warning');
        console.log(`    ${prefix}: ${msg.message} (${msg.ruleId}) at line ${msg.line}:${msg.column}`);
      });
    }
  }

  console.log(chalk.blue('\nSummary:'));
  console.log(`  Total files: ${results.length}`);
  console.log(`  Total errors: ${totalErrors}`);
  console.log(`  Total warnings: ${totalWarnings}`);

  if (hasUnexpectedResults) {
    console.log(chalk.red('\n❌ Test failed: Some files had unexpected linting results.'));
    process.exit(1);
  } else {
    console.log(chalk.green('\n✅ Test passed: All files had expected linting results.'));
    process.exit(0);
  }
}

main().catch((error) => {
  console.error(chalk.red('Error running tests:'), error);
  process.exit(1);
});
