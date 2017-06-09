'use strict';

module.exports = {
  extends: ['tslint-eslint-rules', 'tslint:recommended', 'tslint-react'],

  defaultSeverity: 'warning',

  rules: {
    // http://eslint.org/docs/rules/
    // https://github.com/buzinas/tslint-eslint-rules
    // 'array-callback-return': 'warn', // unavailable
    'switch-default': true,
    // 'dot-location': ['warn', 'property'], // unavailable
    'triple-equals': [true, 'allow-null-check'],
    'new-parens': true,
    // 'no-array-constructor': 'warn', // unavailable
    'no-arg': true,
    'no-conditional-assignment': true,
    // 'no-const-assign': 'warn', // not applicable
    'no-control-regex': true,
    // 'no-delete-var': 'warn', // not applicable
    // 'no-dupe-args': 'warn', // not applicable
    // 'no-dupe-class-members': 'warn', // not applicable
    // 'no-dupe-keys': 'warn', // not applicable
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    // 'no-empty-pattern': 'warn', // unavailable
    'no-eval': true,
    'no-ex-assign': true,
    // 'no-extend-native': 'warn', // unavailable
    // 'no-extra-bind': 'warn', // unavailable
    // 'no-extra-label': 'warn', // unavailable
    'no-switch-case-fall-through': true,
    // 'no-func-assign': 'warn', // not applicable
    // 'no-implied-eval': 'warn', // unavailable
    'no-invalid-regexp': true,
    // 'no-iterator': 'warn', // unavailable
    // 'no-label-var': 'warn', // unavailable
    'label-position': true,
    // 'no-lone-blocks': 'warn', // unavailable
    // 'no-loop-func': 'warn', // unavailable
    // 'no-mixed-operators': [
    //   'warn',
    //   {
    //     groups: [
    //       ['&', '|', '^', '~', '<<', '>>', '>>>'],
    //       ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
    //       ['&&', '||'],
    //       ['in', 'instanceof'],
    //     ],
    //     allowSamePrecedence: false,
    //   },
    // ], // not found
    // 'no-multi-str': 'warn', // unavailable
    // 'no-native-reassign': 'warn', // not applicable
    // 'no-negated-in-lhs': 'warn', // not applicable
    // 'no-new-func': 'warn', // unavailable
    // 'no-new-object': 'warn', // unavailable
    // 'no-new-symbol': 'warn', // unavailable
    'no-construct': true,
    // 'no-obj-calls': 'warn', // not applicable
    // 'no-octal': 'warn', // not applicable
    // 'no-octal-escape': 'warn', // unavailable
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-regex-spaces': true,
    // 'no-restricted-syntax': ['warn', 'WithStatement'], // unavailable
    // 'no-script-url': 'warn', // unavailable
    // 'no-self-assign': 'warn', // unavailable
    // 'no-self-compare': 'warn', // unavailable
    // 'no-sequences': 'warn', // unavailable
    // 'no-shadow-restricted-names': 'warn', // unavailable
    'ter-no-sparse-arrays': [true],
    // 'no-template-curly-in-string': 'warn', // not found
    // 'no-this-before-super': 'warn', // not applicable
    'no-string-throw': true,
    // 'no-undef': 'error', // not applicable
    // 'no-restricted-globals': ['error'].concat(restrictedGlobals), // not found
    'no-unexpected-multiline': true,
    // 'no-unreachable': 'warn', // not applicable
    'no-unused-expression': [
      true,
      'allow-fast-null-checks',
      'allow-new',
      'allow-tagged-template',
    ],
    // 'no-unused-labels': 'warn', // unavailable
    'no-unused-variable': true,
    'no-use-before-declare': true,
    // 'no-useless-computed-key': 'warn', // not found
    // 'no-useless-concat': 'warn', // unavailable
    // 'no-useless-constructor': 'warn', // unavailable
    // 'no-useless-escape': 'warn', // unavailable
    // 'no-useless-rename': [
    //   'warn',
    //   {
    //     ignoreDestructuring: false,
    //     ignoreImport: false,
    //     ignoreExport: false,
    //   },
    // ], // not found
    // 'no-with': 'warn', // unavailable
    // 'no-whitespace-before-property': 'warn', // unavailable
    radix: true,
    // 'require-yield': 'warn', // unavailable
    // 'rest-spread-spacing': ['warn', 'never'], // unavailable
    // strict: ['warn', 'never'], // not applicable
    // 'unicode-bom': ['warn', 'never'], // not found
    'use-isnan': true,
    'valid-typeof': true,
    // 'no-restricted-properties': [
    //   'error',
    //   // TODO: reenable once import() is no longer slow.
    //   // https://github.com/facebookincubator/create-react-app/issues/2176
    //   // {
    //   //   object: 'require',
    //   //   property: 'ensure',
    //   //   message: 'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
    //   // },
    //   {
    //     object: 'System',
    //     property: 'import',
    //     message: 'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
    //   },
    // ], // not found

    // https://palantir.github.io/tslint/rules/
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'comment-format': [true, 'check-space'],
    curly: [true, 'as-needed'],
    indent: [false],
    'interface-name': [true, 'always-prefix'],
    'max-line-length': [false],
    'member-ordering': [false],
    'no-console': [false],
    'object-literal-sort-keys': false,
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'any',
        'named-imports-order': 'any',
      },
    ],
    quotemark: [false],
    'trailing-comma': [false],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-leading-underscore',
      'allow-pascal-case',
    ],

    // https://github.com/palantir/tslint-react
    'jsx-alignment': true,
    'jsx-boolean-value': [true, 'always'],
    'jsx-curly-spacing': [true, 'never'],
    'jsx-no-bind': true,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-use-translation-function': false,
    'jsx-self-close': true,
    'jsx-wrap-multiline': true,
  },
};
