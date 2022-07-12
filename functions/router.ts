import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController"
import linehookController from "./controller/linehookController"

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexController, { prefix: "/" });
    fastify.register(linehookController, )
}