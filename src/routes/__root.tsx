import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "@/components/Header";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-zinc-950">
        <Header />
        <main className="pt-24 container px-4 mx-auto">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});
