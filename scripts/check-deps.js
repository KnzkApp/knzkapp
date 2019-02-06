'use strict';

const pkg = require('../package.json');
const chalk = require('chalk');

validateDependencyObject(pkg.dependencies);
validateDependencyObject(pkg.devDependencies);

function validateDependencyObject(object) {
  Object.keys(object).forEach(key => {
    if (object[key][0] === '^' || object[key][0] === '~') {
      // eslint-disable-next-line no-console
      console.error(
        chalk.red('error'),
        `Dependency ${chalk.bold.bgRed(key)} should be pinned.`
      );
      process.exitCode = 1;
    }
  });
}
