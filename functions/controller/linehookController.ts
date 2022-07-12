import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { client } from "../router";
import messageHandler from "./features/messageHandler";

const channelToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;

export default async function linehookController(fastify: FastifyInstance) {
  fastify.post("/", async (_request: any, reply: FastifyReply) => {
    Promise
      .all(_request.body.events.map(eventHandler))
      .then((result) => reply.send(result));
  });

  const eventHandler = (event) => {
    if (event.type !== "message" || event.message.type !== "text") {
      return Promise.resolve(null);
    } else if (event.source.userId !== process.env.LINE_USERID) {
      console.warn("Someone try to use your bot");
    } else {
        return messageHandler(event)
    }
  };
}
