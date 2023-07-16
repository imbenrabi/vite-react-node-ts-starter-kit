import * as trpc from '@trpc/server';
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

const PORT = 3001;

const t = trpc.initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  getMessage: publicProcedure.input(z.object({ text: z.string().nullish() }).nullish()).query(
    (opts) => ({ message: opts?.input?.text ?? 'Hello from server!' })
  )
})

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(PORT);
