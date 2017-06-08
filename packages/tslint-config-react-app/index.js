'use strict';

module.exports = {
  extends: ['tslint:recommended', 'tslint-react'],
  rules: {
    'ordered-imports': false,
    'interface-name': false,
    'member-ordering': false,
    'object-literal-sort-keys': false,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'comment-format': [true, 'check-space'],
  },
};
