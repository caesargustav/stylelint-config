module.exports = {
  rules: {
    /**
     * Possible errors
     * https://stylelint.io/user-guide/rules/list#possible-errors
     */

    // Color
    'color-no-invalid-hex': true,

    // Font family
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Named grid areas
    'named-grid-areas-no-invalid': true,

    // Function
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    // String
    'string-no-newline': true,

    // Unit
    'unit-no-unknown': true,

    // Property
    'property-no-unknown': true,

    // Keyframe declaration
    'keyframe-declaration-no-important': true,

    // Declaration block
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [ 'consecutive-duplicates-with-different-values' ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // Block
    'block-no-empty': true,

    // Selector
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: [ 'custom-elements' ]
      }
    ],

    // Media feature
    'media-feature-name-no-unknown' : true,

    // At-rule
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ]
      }
    ],

    // Comment
    'comment-no-empty': true,

    // General / Sheet
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,

    /**
     * Limit language features
     * https://stylelint.io/user-guide/rules/list#limit-language-features
     */

    // Alpha-value
    'alpha-value-notation': 'percentage',

    // Color
    'color-function-notation': 'modern',
    'color-no-hex': true,

    // Length
    'length-zero-no-unit': true,

    // Font weight
    'font-weight-notation': 'numeric',

    // Function
    'function-url-no-scheme-relative': true,

    // Number
    'number-max-precision': 2,

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Declaration
    'declaration-block-no-redundant-longhand-properties': true,

    // Declaration block
    'declaration-block-single-line-max-declarations': 1,

    // Selector
    'selector-max-empty-lines': 0,
    'selector-pseudo-element-colon-notation': 'single',

    // General / Sheet
    'no-unknown-animations': true,

    /**
     * Stylistic issues
     * https://stylelint.io/user-guide/rules/list#stylistic-issues
     */

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',

    // Font family
    'font-family-name-quotes': 'always-where-required',

    // Function
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'never',
    'function-whitespace-after': 'always',

    // Number
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,

    // String
    'string-quotes': 'single',

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': 'lower',

    // Value list
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // Property
    'property-case': 'lower',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',

    // Declaration block
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',

    // Selector list
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    // Rule
    'rule-empty-line-before': [ 'always-multi-line', {
      ignore: [ 'after-comment', 'first-nested' ]
    }],

    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Media query list
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    // At-rule
    'at-rule-empty-line-before': [ 'always', {
      ignore: [ 'after-comment', 'first-nested', 'blockless-after-blockless' ]
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    // Comment
    'comment-whitespace-inside': 'always',

    // General / Sheet
    'indentation': 2,
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'no-empty-first-line': true,
    'no-irregular-whitespace': true
  }
}