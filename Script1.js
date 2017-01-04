// JavaScript source code

var Discord = require("discord.js");
var bot = new Discord.Client();



bot.on("message", msg => {
    //This makes it so that only words that start with a '!' are registered by the bot.
    let prefix = "!";
    if (!msg.content.startsWith(prefix)) return;

    //this above line basically says "If the message does not start with a prefix, return to your normal state of sleeping like a good bot."

    if (msg.author.bot) return;
    
    if (msg.content.startsWith(prefix))

        var picArray = [
         'https://i.imgur.com/mfCVvA9.jpg',
         'https://i.imgur.com/JI95VOL.gif',
         'https://i.imgur.com/Pl4um3F.jpg',
         'https://i.imgur.com/2mUjGUC.jpg',
         'https://i.reddituploads.com/9be75a982e414240ad8a1ef04ea2d167?fit=max&h=1536&w=1536&s=ee6e119392e5d78be58c06b09aedaeb4',
         'https://i.imgur.com/Puv4zxa.jpg',
         'https://i.imgur.com/X5ClMDm.gifv',
         'https://i.imgur.com/Lh6eKZA.jpg',
         'https://i.imgur.com/VRD9odu.jpg?1',
         'https://i.imgur.com/wDKqDCC.jpg',
         'https://i.imgur.com/F5QlNi1.gif',
         'https://i.imgur.com/4Ixg30D.jpg',
         'https://i.imgur.com/526nFhO.jpg',
         'https://i.imgur.com/eH9zlHv.jpg',
         'https://i.imgur.com/Y4iGshS.jpg',
         'https://i.imgur.com/J31qXuR.jpg',
         'https://i.reddituploads.com/09fccb4691614ceea7e488be3c4f95f8?fit=max&h=1536&w=1536&s=3a479c1f25a7d746109a17f3d2ddd6f6'
        ];
    var pic = picArray[Math.floor(Math.random() * picArray.length)];

    var responseObject = {
        "!ping": "pong!",
        "!bork": "ruff!",
        "!help": "```Here's the commands. \nType '!bork' to have me say ruff. \nType '!ping' to have me say pong. \nMore to come soon bois. \nKeep it fluffy!```",
        "!pom": "here's a pic: " + " " + pic

    }
   if(responseObject[msg.content]) {
    msg.channel.sendMessage(responseObject[msg.content]);
}
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.login("BOT PASSWORD DO NOT STEAL");
