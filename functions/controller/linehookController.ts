import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function linehookController(fastify: FastifyInstance) {
    fastify.post("/",async (_request: FastifyRequest, reply: FastifyReply) => {
        return 'ok'
    })
}