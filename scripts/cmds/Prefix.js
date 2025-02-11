const fs = require('fs');

module.exports = {
config: {
name: "prefix",
version: "1.0",
author: "ミ★𝐓𝐇𝐄 ت𝐕𝐎𝐈𝐃彡", // this cmd will expire if you change this credits
countDown: 5,
role: 0,
shortDescription: "",
longDescription: "",
category: "system",
},

onStart: async function() {},

onChat: async function({ event, message, getLang, api }) {
const link = [
"https://i.ibb.co/w0wRH8k/image.jpg",
]
let img =
link[Math.floor(Math.random()*link.length)]
if (event.body) {
const word = event.body.toLowerCase();
switch (word) {
case "prefix":
const replies = [
"𝘄𝗵𝗶𝘀 𝘀𝗮̂𝗺𝗮 ♛\n━━━━━━━━━━━━━━━━━━\n𝗠⃪𝗬⃪ 𝗣⃪𝗥⃪𝗘⃪𝗙⃪𝗜⃪𝗫⃪ ☞︎︎︎⦍#⦐☜︎︎\n━━━━━━━━━━━━━━━━━━\n𝐓𝐇𝐄 𝐏𝐑𝐄𝐅𝐈𝐗 𝐎𝐅 𝐆𝐑𝐎𝐔𝐏 ☞︎⦍#⦐☜︎︎︎\n━━━━━━━━━━━━━━━━━\n➪ 𝚙𝚘𝚞𝚛 𝚟𝚘𝚒𝚛 𝚕𝚊 𝚕𝚒𝚜𝚝𝚎 𝚍𝚎 𝚌𝚖𝚍 é𝚌𝚛𝚒𝚟𝚎𝚣 #𝚑𝚎𝚕𝚙 ✍︎\n\n━━━━━━━━━━━━━━━━━━━\n",
];
api.setMessageReaction("🟢", event.messageID, event.messageID, api); 
const randomIndex = Math.floor(Math.random() * replies.length);
message.reply({
body: replies[randomIndex],
attachment: await global.utils.getStreamFromURL(img)})
break;
default:
return; 
}
}
},
};
