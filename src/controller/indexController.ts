import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const indexController = async (fastify: FastifyInstance) => {
  fastify.get("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    reply.send("Hello World")
  });
}

export default indexController
