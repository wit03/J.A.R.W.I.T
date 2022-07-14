import { client } from "../../router"

const replyOthers = (msg, token) => {
    const result = "สวัสดีครับ J.A.R.W.I.T คือผู้ช่วยส่วนตัวของวิชญ์ ซึ่งตอนนี้ยังไม่มี Features สำหรับผู้ใช้่คนอี่นนะครับ หากสนใจเพิ่มเติม สามารถเข้าไปศึกษา J.A.R.W.I.T ได้ที่ https://github.com/wit03/J.A.R.W.I.T"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default replyOthers