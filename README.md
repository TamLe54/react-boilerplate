# <img src='./public/techsoft.ico' width=30 height=30 alt='Techsoft'/> Reactjs Boilerplate

This repository contains a boilerplate setup for a React project. It provides a basic structure and configuration to kickstart your React development.

## Features

- React 18
- ESLint
- Prettier
- Tailwind css

## Tools

- [Shadcn](https://ui.shadcn.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tanstack React Query](https://tanstack.com/query/latest)
- [Tanstack React Table](https://tanstack.com/table/latest)
- [Tanstack React Router](https://tanstack.com/router/latest)

## Getting Started

To get started with this boilerplate, follow these steps:

1. Clone the repository
2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`
5. After add new route, update the route tree

```bash
yarn routes
```

## Folder Structure

The folder structure of this boilerplate is as follows:

```
src/
├── assets
├── components/
    └──ui/
├── constants/
├── contexts/
├── hooks/
├── i18n/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
├── app.js
├── index.tsx
└── routeTree.gen.ts
```

## Documents

- [Front-end convention](./docs/front-end-convention.md)
- [Git strategy](./docs/git-strategy.md)
- Download the plugin [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) to work with multi-language feature
