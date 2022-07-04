import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

const postController = async (fastify: FastifyInstance) => {
  fastify.post("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    reply.status(200).send("OK")
  });
}

export default postController
