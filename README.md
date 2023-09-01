# The best structure folder [@nextjs](https://github.com/vercel/next.js) 13 (Directory App)

### EsLint Config Help

Because comments cannot be placed in the [*`.eslintrc`*](https://github.com/peymanath/nextjs-config/blob/main/.eslintrc) file, we will talk more about the rules here :)

```JS
//Custom Rule Errors
'react-hooks/exhaustive-deps': 'off', //https://legacy.reactjs.org/docs/hooks-rules.html
'@typescript-eslint/array-type': 'error', //https://typescript-eslint.io/rules/array-type
'@typescript-eslint/await-thenable': 'error', //https://typescript-eslint.io/rules/await-thenable
'@typescript-eslint/ban-ts-comment': 'error', //https://typescript-eslint.io/rules/ban-ts-comment
'@typescript-eslint/ban-tslint-comment': 'error', //https://typescript-eslint.io/rules/ban-tslint-comment
'@typescript-eslint/ban-types': 'error', //https://typescript-eslint.io/rules/ban-types
'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], //https://typescript-eslint.io/rules/consistent-indexed-object-style
'@typescript-eslint/consistent-type-definitions': ['error', 'type'], //https://typescript-eslint.io/rules/consistent-type-definitions
'@typescript-eslint/no-duplicate-enum-values': 'error', //https://typescript-eslint.io/rules/no-duplicate-enum-values
'@typescript-eslint/no-duplicate-type-constituents': 'error', //https://typescript-eslint.io/rules/no-duplicate-type-constituents
'@typescript-eslint/no-empty-interface': 'error', //https://typescript-eslint.io/rules/no-empty-interface
'no-empty-function': 'error', //https://typescript-eslint.io/rules/no-empty-function
'@typescript-eslint/no-empty-function': 'error', //https://typescript-eslint.io/rules/no-empty-function
'@typescript-eslint/no-var-requires': 'error', //https://typescript-eslint.io/rules/no-var-requires
'@typescript-eslint/no-useless-empty-export': 'error', //https://typescript-eslint.io/rules/no-useless-empty-export
'@typescript-eslint/no-unsafe-return': 'error', //https://typescript-eslint.io/rules/no-unsafe-return
'@typescript-eslint/no-unsafe-enum-comparison': 'error', //https://typescript-eslint.io/rules/no-unsafe-enum-comparison
'no-unused-vars': 'error', //https://typescript-eslint.io/rules/no-unused-vars
'@typescript-eslint/no-unused-vars': 'error', //https://typescript-eslint.io/rules/no-unused-vars
'prettier/prettier': [
    'error',
    {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    jsxSingleQuote: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    singleAttributePerLine: true,
    },
],

//Custom Rule Warning
'@typescript-eslint/consistent-type-exports': 'warn', //https://typescript-eslint.io/rules/consistent-type-exports
'@typescript-eslint/consistent-type-imports': 'error', //https://typescript-eslint.io/rules/consistent-type-exports
'@typescript-eslint/member-ordering': 'warn', //https://typescript-eslint.io/rules/member-ordering
'@typescript-eslint/no-explicit-any': 'warn', //https://typescript-eslint.io/rules/no-explicit-any
'@typescript-eslint/explicit-function-return-type': 'warn', //https://typescript-eslint.io/rules/explicit-function-return-type

```