import { resourceUsage } from "process";
import { client } from "../../router"

const transactionLogHandler = (msg, token) => {
    const category = {
        f: 'food',
        d: 'drinks',
        t: 'transportation',
        m: 'miscellaneous',
        s: 'snack',
        o: 'Online Shopping'
    }
    var amount = msg.match(/\d+/g);
    var categoryType = msg.match(/[fdtmso]+/g)

    var result = "Pay " + amount + "฿" + " for " + category[categoryType]
    return client.replyMessage(token, {
        type: "text",
        text: result,
      });
}

export default transactionLogHandler