import { client } from "../../router";
import Airtable from "airtable";

const transactionLogHandler = (msg, token) => {
  const ATbase = new Airtable({
    apiKey: process.env.AIRTABLE_API,
  }).base((process.env.AIRTABLE_BASE)!);

  const category = {
    f: "Foods",
    d: "Drinks",
    t: "Transportations",
    m: "Miscellaneous",
    s: "Snacks",
    o: "Online Shoppings",
  };
  var amount: number = +(msg.match(/\d+/g)[0]);
  var categoryType: string = category[msg.match(/[fdtmso]+/g)[0]];
  var date = JSON.stringify(new Date().toISOString().split("T")[0]);

  var result: any = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Transaction Logger",
          weight: "bold",
          color: "#1DB446",
          size: "sm",
        },
        {
          type: "text",
          text: "Paid",
          weight: "bold",
          size: "xxl",
          margin: "md",
        },
        {
          type: "separator",
          margin: "xxl",
        },
        {
          type: "box",
          layout: "vertical",
          margin: "xxl",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: categoryType,
                  size: "sm",
                  color: "#555555",
                  flex: 0,
                },
                {
                  type: "text",
                  text: amount + "฿",
                  size: "sm",
                  color: "#111111",
                  align: "end",
                },
              ],
            },
            {
              type: "separator",
              margin: "xxl",
            },
            {
              type: "box",
              layout: "horizontal",
              margin: "xxl",
              contents: [
                {
                  type: "text",
                  text: "Today's Spending",
                  size: "sm",
                  color: "#555555",
                },
                {
                  type: "text",
                  text: "50฿",
                  size: "sm",
                  color: "#111111",
                  align: "end",
                },
              ],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: "Today's Budget",
                  size: "sm",
                  color: "#555555",
                },
                {
                  type: "text",
                  text: "100฿",
                  size: "sm",
                  color: "#111111",
                  align: "end",
                },
              ],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  size: "sm",
                  color: "#555555",
                  text: "Today's left",
                },
                {
                  type: "text",
                  text: "50฿",
                  size: "sm",
                  color: "#111111",
                  align: "end",
                },
              ],
            },
          ],
        },
        {
          type: "separator",
          margin: "xxl",
        },
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            {
              type: "text",
              text: "Date",
              size: "xs",
              color: "#aaaaaa",
              flex: 0,
            },
            {
              type: "text",
              text: "12 July 2022",
              color: "#aaaaaa",
              size: "xs",
              align: "end",
            },
          ],
        },
      ],
    },
    styles: {
      footer: {
        separator: true,
      },
    },
  };

  const field = {
    "fields": {
      "Date": date,
      "Category": categoryType,
      "Amount": amount,
    },
  };

  function writeToAirtable() {
    return new Promise((resolve, reject) => {
      ATbase('Expense Tracker').create([field], function(err, record) {
        if (err) {
          reject(err);
          return;
        }
        resolve(record)
      })
    })
    
  }
  
  const replyLine = async () => {
    return client.replyMessage(token, {
      type: "text",
      text: "Done" + JSON.stringify(await writeToAirtable()) 
    })
  } 

  return replyLine()
    


  

  // return client.replyMessage(token, {
  //   type: "flex",
  //   altText: "Paid " + amount + "฿" + " for " + categoryType,
  //   contents: result,
  // });
};

export default transactionLogHandler;
