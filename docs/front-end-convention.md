# Frontend Convention

## Folder Structure

We use **Colocation** to organize files and components so that related logic, styles, and tests are grouped together. This can improve maintainability and readability:

- Logic, styles, and tests are grouped together
- Shared hooks, context, utils or helpers will grouped in separate places
- Routes will follow the convention of [Tanstack router](https://tanstack.com/router/v1/docs/framework/react/guide/route-trees#directory-routes) and [file naming](https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing#file-naming-conventions) conventions as we will use it for the main routing

> Place code as close to where it's relevant as possible

We will use [Barrel exports](https://basarat.gitbook.io/typescript/main-1/barrel) that can be easily imported elsewhere in the project

The file name will be named on kebab-case. For example: `random-file-name.ts`

```bash
src/
├── components/
│   ├── button/
│   │   ├── button.tsx
│   │   ├── button.css
│   │   ├── button.test.ts
│   │   └── index.ts
│   ├── card/
│   │   ├── card.tsx
│   │   ├── card.css
│   │   ├── card.test.ts
│   │   └── index.ts
│   └── header/
│       ├── header.tsx
│       ├── header.css
│       ├── header.test.ts
│       └── index.ts
├── pages/
│   ├── home/
│   │   ├── home.tsx
│   │   ├── home.css
│   │   ├── home.test.ts
│   │   ├── index.ts
│   │   ├── use-home-custom-hook.ts
│   │   ├── product-list/
│   │   │   ├── product-list.tsx
│   │   │   ├── product-list.css
│   │   │   ├── use-product-list-query.ts
│   │   │   ├── use-product-list-query.test.ts
│   │   │   └── index.ts
│   │   └── product-item/
│   │       ├── product-item.tsx
│   │       ├── product-item.css
│   │       ├── use-product-item-query.ts
│   │       ├── use-product-item-query.test.ts
│   │       └── index.ts
│   └── login/
│       ├── login.tsx
│       ├── login.css
│       ├── login.test.ts
│       └── index.ts
├── hooks/
│   ├── use-custom-hook.ts
│   └── use-another-hook.ts
├── contexts/
│   ├── auth-context.tsx
│   └── theme-context.tsx
├── services/
│   ├── api.tsx
│   └── auth.tsx
├── utils/
│   ├── constants.tsx
│   └── helpers.tsx
├── routes/
│   ├── _authenticated/
│   │   └── home.tsx
│   ├── __root.tsx
│   ├── _layout.tsx
│   ├── _authenticated.route.tsx
│   └── index.tsx
├── app.tsx
└── index.ts
```

## Code conventions

### General Conventions

1. **File Naming:**

- Use kebab-case for filenames (e.g., `my-component.tsx`).
- Prefer .tsx for React components and .ts for non-React files.

2. **Component Naming:**

- Use PascalCase for React component names (e.g., `MyComponent`).
- Use camelCase for component props and state (e.g., `isLoading`, `userName`).

3. **Function Naming:**

- Use camelCase for function names (e.g., `fetchData`, `handleClick`).

Learn more about naming convention: [Naming Cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

### TypeScript Conventions

1. **Type Annotations:**

- Always use explicit type annotations for function return types, parameters, and variables.
- Use interfaces (`ButtonProps`) for defining props and state.

2. **Interfaces vs. Types:**

- Use interface for defining object shapes and type for everything else (e.g., `unions`, `intersections`).

3. **Enum Naming:**

- Use PascalCase for enum names and UPPERCASE for enum values, for example

```ts
enum Status {
  ACTIVE,
  INACTIVE,
}
```

### React Specific Conventions

1. **Component Declaration:**

- Use function components with hooks.
- Use arrow functions for component methods and event handlers.

2. **JSX Syntax:**

- Use self-closing tags for elements without children, for example:

```jsx
(<img />), (<Input />);
```

- Wrap multiline JSX in parentheses for better readability.

3. **Props Destructuring:**

- Destructure props in the component function parameter list for readability.

### Comments and Documents

1. **Comments:**

- Write clear and concise comments explaining complex logic and business rules.
- Use JSDoc style comments for documenting functions and components.
- "Todo" comments should include the name of the person who left the comment. For example:

```ts
// TODO: [Thai Hoang] handle responsive for tablet
```

2. **Documents:**

- Maintain a README file in the project root with setup instructions and project overview.
- Keep a CHANGELOG for documenting notable changes and updates.

### Linting and formatting

Apply the recommended configuration for a React.js TypeScript project with Tailwind CSS and sorted imports.

<details>
<summary>.eslintrc</summary>

```ts
{
  "env": {
    "browser": true,
    "es2020": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["react", "react-hooks", "@typescript-eslint", "tailwindcss", "simple-import-sort"],
  "rules": {
    "no-console": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [1, { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error"
  }
}
```

</details>

<details>
<summary>.prettierrc</summary>

```ts
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

</details>
</details>

<details>
<summary>package.json</summary>

```ts
"lint-staged": {
    "*.{js,ts,tsx}": [
      "yarn run format",
      "yarn run lint",
      "yarn run typecheck"
    ]
}
```

</details>
