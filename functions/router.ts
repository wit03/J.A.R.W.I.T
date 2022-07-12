import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController"
import linehookController from "./controller/linehookController"
import line from "@line/bot-sdk"

const channelToken = process.env.LINE_CHANNEL_ACCESS_TOEKN;
const client = new line.Client({
    channelAccessToken: channelToken!
})

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexController, { prefix: "/" });
    fastify.register(linehookController, { prefix: "/line-webhook" })
}

export { client }