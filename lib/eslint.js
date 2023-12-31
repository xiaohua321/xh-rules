module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:import/errors',
    'airbnb-base',
  ],
  rules: {
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-promise-executor-return': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'vue/attribute-hyphenation': ['error', 'always', { ignore: [] }],
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true, ignore: [] }],
    'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: [] }],
    semi: 'off',
  },
}
