import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/welcome')({
  component: () => <div>Hello /_authenticated/home!</div>,
});
