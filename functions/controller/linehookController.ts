import { channel } from "diagnostic_channel";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import axios from "axios";
import { request } from "http";

const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOEKN;

export default async function linehookController(fastify: FastifyInstance) {
  fastify.post("/", async (_request: any, reply: FastifyReply) => {
    for(const event of _request.body.events) {
        if(event.type === 'message') {
            console.log(event)
        }
    }  
    if (_request.body.type === "message") {
      axios.post("https://api.line.me/v2/bot/message/reply", {
        replyToken: _request.body.replyToken,
        messages: [
          { type: "text", text: "test" },
        ],
      }, {
        headers: {
          authorization: `Bearer ${channelAccessToken}`,
        },
      });
    }
    return "ok";
  });
}
