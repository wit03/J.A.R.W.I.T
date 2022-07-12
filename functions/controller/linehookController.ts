import { channel } from "diagnostic_channel";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { client } from "../router";

const channelToken = process.env.LINE_CHANNEL_ACCESS_TOEKN;

export default async function linehookController(fastify: FastifyInstance) {
   
    client.replyMessage(channelToken!, {
        type: "text",
        text: "Test"
    })
    return "ok";

}
