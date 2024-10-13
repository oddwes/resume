import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import js from '@eslint/js'

export default [
  {files: ['src/*.{js,mjs,cjs,jsx}', 'eslint.config.mjs']},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginReactConfig,
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single',
        {
          'avoidEscape': true,   // Allows double quotes if avoiding an escape (e.g., for apostrophes)
          'allowTemplateLiterals': true  // Allows template literals
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'sort-imports': ['error', {
        'ignoreCase': false,
        'ignoreDeclarationSort': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'multiple', 'single', 'none'],
        'allowSeparatedGroups': false
      }]
    },
  }
]