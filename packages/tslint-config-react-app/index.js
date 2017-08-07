'use strict';

module.exports = {
  extends: ['tslint:recommended', 'tslint-react', 'tslint-eslint-rules'],

  defaultSeverity: 'warning',

  rules: {
    // https://palantir.github.io/tslint/rules/
    'adjacent-overload-signatures': true,
    align: {
      options: ['parameters', 'statements'],
    },
    'array-type': {
      options: ['array-simple'],
    },
    'arrow-parens': false,
    'arrow-return-shorthand': true,
    'ban-types': {
      options: [
        ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
        [
          'Function',
          'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
        ],
        ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
        ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
        ['String', 'Avoid using the `String` type. Did you mean `string`?'],
        ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
      ],
    },
    'callable-types': true,
    'class-name': true,
    'comment-format': {
      options: ['check-space'],
    },
    curly: false,
    'cyclomatic-complexity': false,
    eofline: true,
    forin: true,
    'import-spacing': true,
    indent: false,
    'interface-name': {
      options: ['always-prefix'],
    },
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'label-position': true,
    'max-classes-per-file': false,
    'max-line-length': false,
    'member-access': true,
    'member-ordering': false,
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': {
      options: [2],
    },
    'no-console': false,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-empty': false,
    'no-empty-interface': true,
    'no-eval': true,
    'no-internal-module': true,
    'no-invalid-this': false,
    'no-misused-new': true,
    'no-namespace': true,
    'no-parameter-properties': false,
    'no-reference': true,
    'no-reference-import': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': false,
    'no-trailing-whitespace': true,
    'no-unnecessary-initializer': true,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    // disable this rule as it is very heavy performance-wise and not that useful
    'no-use-before-declare': false,
    'no-var-keyword': true,
    'no-var-requires': true,
    'object-literal-key-quotes': {
      options: ['consistent-as-needed'],
    },
    'object-literal-shorthand': true,
    'object-literal-sort-keys': false,
    'one-line': {
      options: [
        'check-catch',
        'check-else',
        'check-finally',
        'check-open-brace',
        'check-whitespace',
      ],
    },
    'one-variable-per-declaration': {
      options: ['ignore-for-loop'],
    },
    'only-arrow-functions': {
      options: ['allow-declarations', 'allow-named-functions'],
    },
    'ordered-imports': false,
    'prefer-const': true,
    'prefer-for-of': true,
    quotemark: false,
    radix: true,
    semicolon: {
      options: ['always'],
    },
    'space-before-function-paren': {
      options: {
        anonymous: 'never',
        asyncArrow: 'always',
        constructor: 'never',
        method: 'never',
        named: 'never',
      },
    },
    'trailing-comma': false,
    'triple-equals': {
      options: ['allow-null-check'],
    },
    typedef: false,
    'typedef-whitespace': {
      options: [
        {
          'call-signature': 'nospace',
          'index-signature': 'nospace',
          parameter: 'nospace',
          'property-declaration': 'nospace',
          'variable-declaration': 'nospace',
        },
        {
          'call-signature': 'onespace',
          'index-signature': 'onespace',
          parameter: 'onespace',
          'property-declaration': 'onespace',
          'variable-declaration': 'onespace',
        },
      ],
    },
    'typeof-compare': true,
    'unified-signatures': true,
    'use-isnan': true,
    'variable-name': {
      options: [
        'ban-keywords',
        'check-format',
        'allow-pascal-case',
        'allow-leading-underscore',
      ],
    },
    whitespace: {
      options: [
        'check-branch',
        'check-decl',
        'check-operator',
        'check-separator',
        'check-type',
        'check-typecast',
      ],
    },

    // https://github.com/palantir/tslint-react
    'jsx-alignment': true,
    'jsx-boolean-value': {
      options: ['always'],
    },
    'jsx-curly-spacing': {
      options: ['never'],
    },
    'jsx-no-bind': true,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-use-translation-function': false,
    'jsx-self-close': true,
    'jsx-wrap-multiline': true,

    // https://github.com/buzinas/tslint-eslint-rules
    'array-bracket-spacing': {
      options: [
        'never',
        {
          singleValue: false,
          objectsInArrays: false,
          arraysInArrays: false,
        },
      ],
    },
    'block-spacing': {
      options: ['always'],
    },
    'brace-style': {
      options: [
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
    },
    'handle-callback-err': {
      options: ['err'],
    },
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': {
      options: ['both'],
    },
    'no-invalid-regexp': true,
    'no-multi-spaces': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'object-curly-spacing': {
      options: ['always'],
    },
    'sort-imports': false,
    'space-in-parens': {
      options: ['never'],
    },
    'ter-arrow-body-style': false,
    'ter-arrow-parens': false,
    'ter-arrow-spacing': true,
    'ter-computed-property-spacing': false,
    'ter-func-call-spacing': false,
    'ter-indent': false,
    'ter-max-len': false,
    'ter-no-irregular-whitespace': true,
    'ter-no-sparse-array': false,
    'ter-prefer-arrow-callback': {
      options: [
        {
          allowNamedFunctions: true,
          allowUnboundThis: false,
        },
      ],
    },
    'valid-jsdoc': true,
    'valid-typeof': true,
  },
};
