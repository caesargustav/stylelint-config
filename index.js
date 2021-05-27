module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    /**
     * add custom rules
     * docs: https://stylelint.io/user-guide/rules/list
     */
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
    'no-descending-specificity': null
  }
}