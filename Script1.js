// JavaScript source code

var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.login("MjY2MDAzMDI2MjYxNzA0NzI1.C03WcQ.OlQpbCflGZHR9nsqbXDQ7Wt9hi0");
