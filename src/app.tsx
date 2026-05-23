import { createRootRoute, createRouter, RootRoute, Router } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Create a root route
export const rootRoute = createRootRoute({
  component: () => {
    return (
      <div className="w-full">
        <div className="p-2 flex gap-2 text-lg">
          <a href="/" className="[&.active]:font-bold">
            Home
          </a>
        </div>
        <hr />
        <div>
          {/* Outlet for child routes will be rendered here */}
        </div>
      </div>
    )
  },
})

// Create the route tree
const routeTreeWithRoot = routeTree

// Create a new router instance
export const router = createRouter({ routeTree: routeTreeWithRoot })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
