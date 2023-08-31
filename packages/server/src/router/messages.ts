import { z } from "zod";
import { publicProcedure, router } from "../utils";

const GetMessageInput = z.object({ text: z.string().nullish() }).nullish();

export const messagesRouter = router({
  getMessage: publicProcedure.input(GetMessageInput).query(
    (opts) => ({ message: opts?.input?.text ? `Hello ${opts?.input?.text}` : 'Hello from server!' })
  )
});
