const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("general")
setInterval(function() {
channel.send(`538128242809241602`);
}, 30)
})

client.login(process.env.BOT_TOKEN);