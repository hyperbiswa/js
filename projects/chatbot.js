/*

[---- CODED BY BISWA -----]

*/
window.addEventListener("load", async () => {
  const convo = {
    random: ["Let me think about it."],
  };
  const dom = (obj) => {
    let methods = {
      create: (element) => {
        return obj.createElement(element);
      },
      addClass: (className) => {
        return obj.classList.add(className);
      },
      removeClass: (className) => {
        return obj.classList.remove(className);
      },
      get: (selector) => {
        return obj.querySelector(selector);
      },
      getAll: (selector) => {
        return obj.querySelectorAll(selector);
      },
      css: (css) => {
        return Object.assign(obj.style, css);
      },
      fadeOut: (delay = 100) => {
        let opacity = 1;
        let inv = setInterval(() => {
          opacity -= 0.1;
          if (opacity <= 0) {
            opacity = 0;
          }
          obj.style.opacity = opacity;
          if (opacity === 0) {
            clearInterval(inv);
            obj.style.display = "none";
          }
        }, delay);
      },
      fadeIn: (delay = 100) => {
        let opacity = 0;

        let inv = setInterval(() => {
          opacity += 0.1;
          if (opacity >= 1) {
            opacity = 1;
          }
          obj.style.opacity = opacity;
          if (opacity === 1) {
            clearInterval(inv);
          }
        }, delay);
      },
      gen_id: (len = 10) => {
        let char = "abcdefghijklmnopqrstuvwxyz0123456789";
        let r = "";
        for (let i = 0; i < len; i++) {
          r += char[Math.floor(Math.random() * char.length)];
        }
        return r;
      },
    };
    return methods;
  };
  let chatWindow = dom(document).create("div");
  dom(chatWindow).addClass("chat--window");
  let msgList = dom(document).create("ul");
  let inputContainer = dom(document).create("div");
  let input = dom(document).create("input");
  let btn = dom(document).create("button");
  btn.textContent = "Send";
  [input].map((e) => inputContainer.appendChild(e));
  [msgList, inputContainer].map((e) => chatWindow.appendChild(e));
  input.placeholder = "Type something...";
  input.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      await sendUserMessage(input.value);
      input.value = "";
    }
  });
  const bot = {
    send_message: async (text, delay = 1500) => {
      setTimeout(async () => {
        let message = await createMessage("bot", "Typing....");
        setTimeout(async () => {
          let msg = dom(document).get("#" + message.msg_id);
          msg.innerHTML = text;
        }, delay);
        return message;
      }, delay);
      
    },
  };
  const sendUserMessage = async (text) => {
    let msg = await createMessage("user", text);
    return await OnMessageEvent(msg.text);
  };
  const OnMessageEvent = async (text) => {
    let num =  text.match(/\d+/g);
  let cl =  text.match(/[0-9+\-*/]+/g);
    if (text.includes("hello")) {
      await bot.send_message("Whats up dude");
    }else if(num.length != 0 && text.includes("sum")){
        let cal =  num.map(n=> Number(n)).reduce((x, y)=> x + y );
        await bot.send_message("result should be: " + cal);
    }else if(cl.length != 0 && text.includes("calculate")){
        await bot.send_message("I think the result should be " + eval(cl[0]) + " Am I correct?");
     } else {
      await bot.send_message("Seems you trying access something...");
    }
  };
  const createMessage = async (clientName, text) => {
    let msgObj = dom(document).create("li");
    dom(msgObj).css({
        listStyle:"none",
        padding:"5px 10px",
        fontSize:"25px",
        fontFamily:"monospace, sans-serif",
        fontWeight:600,
        color:"#9d9d9d"
          });
          
    dom(msgObj).fadeIn(200);
    let msg_id = ["msg_id_", dom(document).gen_id(10)].join("");
    [clientName + "--msg", "msg--card"].map((className)=>dom(msgObj).addClass(className));
    
    // dom(dom(document).get(".user--msg")).css({
    //     float:"right"
    //   });
    let msg = dom(document).create("div");
    msg.innerHTML += text;
    msgObj.setAttribute("id", msg_id);
    msgObj.appendChild(msg);
    msgList.appendChild(msgObj);
    return { text: text, client: clientName, msg_id: msg_id };
  };
  // styling
  msgList.scrolTop =  msgList.scrollHeight - msgList.clientHeight;
  dom(msgList).css({
    overflow:"auto",
    padding:0,
    height: 500
      });
  dom(inputContainer).css({
    width:"100%",
    position:"fixed",
    background:"#383838",
    bottom:0,
    display:"flex",
    padding:"10px",
    alignItems:"center"
  });
  dom(chatWindow).css({
    height: "600px",
    background: "#383838",
    width: "450px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    display:"flex",
    flexDirection:"column",
    // border: "solid 1px #9d9d9d"
  });
  dom(input).css({
    border: "none",
    color:"#9d9d9d",
    // borderBottom: "solid 2px #9d9d9d",
    padding: "10px 2px",
    fontFamily: "monospace, sans-serif",
    background: "transparent",
    fontSize: "25px",
    fontWeight: "bold",
  });
  dom(document.body).css({
    height: "100vh",
    background: "#373737",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin:0,
    padding:0
  });
  document.body.appendChild(chatWindow);
});
