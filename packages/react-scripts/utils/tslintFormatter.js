'use strict';

const Lint = require('tslint');
const chalk = require('chalk');
const table = require('text-table');

var __extends = this.__extends ||
  function(d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) {
        d[p] = b[p];
      }
    }

    function __() {
      this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
  };

var Formatter = (function(_super) {
  __extends(Formatter, _super);

  function Formatter() {
    _super.apply(this, arguments);
  }

  Formatter.prototype.format = function(failures) {
    let output = '\n';
    let hasErrors = false;
    let reportContainsErrorRuleIDs = false;

    let messages = failures.map(failure => {
      let messageType = failure.getRuleSeverity();
      let ruleId = failure.getRuleName();

      if (messageType === 'error') {
        hasErrors = true;
        if (ruleId) {
          reportContainsErrorRuleIDs = true;
        }
      }

      let line = failure.getStartPosition().getLineAndCharacter().line + 1 || 0;
      let position = chalk.bold('Line ' + line + ':');
      return [
        '',
        position,
        messageType,
        failure.getFailure().replace(/\.$/, ''),
        chalk.underline(ruleId || ''),
      ];
    });

    // if there are error messages, we want to show only errors
    if (hasErrors) {
      messages = messages.filter(m => m[2] === 'error');
    }

    // add color to rule keywords
    messages.forEach(m => {
      m[4] = m[2] === 'error' ? chalk.red(m[4]) : chalk.yellow(m[4]);
      m.splice(2, 1);
    });

    let outputTable = table(messages, {
      align: ['l', 'l', 'l'],
      stringLength(str) {
        return chalk.stripColor(str).length;
      },
    });

    output += `${outputTable}\n\n`;

    if (reportContainsErrorRuleIDs) {
      // Unlike with warnings, we have to do it here.
      // We have similar code in react-scripts for warnings,
      // but warnings can appear in multiple files so we only
      // print it once at the end. For errors, however, we print
      // it here because we always show at most one error, and
      // we can only be sure it's an ESLint error before exiting
      // this function.
      output += 'Search for the ' +
        chalk.underline(chalk.red('keywords')) +
        ' to learn more about each error.';
    }

    return output;
  };

  return Formatter;
})(Lint.Formatters.AbstractFormatter);

exports.Formatter = Formatter;
