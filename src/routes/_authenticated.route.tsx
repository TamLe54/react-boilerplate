import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  component: () => <AuthenticatedApp />,
});

const AuthenticatedApp = () => {
  const isAuthenticated = true; // Replace this with your authentication logic

  if (!isAuthenticated) {
    return <Outlet />; // Handle unauthenticated cases
  }

  return <Outlet />;
};
