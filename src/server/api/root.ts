import { createTRPCRouter } from "./trpc";
// import { exampleRouter } from "./routers/example";
import { laborStatsRouter } from "./routers/laborStats";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  labor_stats: laborStatsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
