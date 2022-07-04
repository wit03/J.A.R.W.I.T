import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import router from "./routes.ts";
const PORT = 7700;

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

