import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController";
import postController from "./controller/postController"

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexController, { prefix: "/" });
  fastify.register(postController, {prefix: "/post"})
}
