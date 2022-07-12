import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController"
import linehookController from "./controller/linehookController"
import { Client } from "@line/bot-sdk"

const channelToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const client = new Client({
    channelAccessToken: channelToken!
})

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexController, { prefix: "/" });
    fastify.register(linehookController, { prefix: "/line-webhook" })
}

export { client }