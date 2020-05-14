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
         'https://i.imgur.com/mfCVvA9.jpg \nNot a bad Pom pic! They\'ve got a cute bowtie and everything! Also, the car\'s cool. **8/10**',
         'https://i.imgur.com/JI95VOL.gif \nHoly shit, this Pom is invincible, able to phase through bars and shit practically unphased. Such a badass Pom that still is just downright adorable. **8/10**',
         'https://i.imgur.com/Pl4um3F.jpg \nAn extremely high fidelity picture that allows you to see the individual whiskers on the Pom\'s fluffy little face. Remarkable, absolutely stunning. You can see it in its natural state, surrounded by all the leaves and stuff. Wow. **8/10**, easily!',
         'https://i.imgur.com/2mUjGUC.jpg \nHmmmm...Not sure why this is in my database, the Pom looks a bit...hairless? I mean, apart from the weird black hair on their upper lip, this is one bald pom! It looks more Human than canine. **1/10** o wait...the pom\'s the one in the foreground! **9/10**',
         'https://i.reddituploads.com/9be75a982e414240ad8a1ef04ea2d167?fit=max&h=1536&w=1536&s=ee6e119392e5d78be58c06b09aedaeb4 \nO wow now this one\'s a treat! You got the snow, the fluff, and the adorable mess of the former on the latter\s mane! **8/10**',
         'https://i.imgur.com/Puv4zxa.jpg \nUgh adorable. Look at \'em, all wrapped, like a pomrito (pom burrito, delicacy worldwide)! Notice the coy look off to the side, as if to say \"o I guess I\'m cute teehee. \" Really remarkable stuff, **8/10** ',
         'https://i.imgur.com/X5ClMDm.gifv \nHe made it over! O wow, the proud, excited trot at the end, makes this gif phenomenal! **8/10**',
         'https://i.imgur.com/Lh6eKZA.jpg \nA typical yawning Pom. Adorable as always. I mean, jus look at the tongue b, shit\'s adorable! **8/10** ',
         'https://i.imgur.com/VRD9odu.jpg?1 \nHeh, a rare concealed Pom! If you look very closely, you\'ll notice a tongue sticking out ever so slighty right under their nose! The sneaky tongue, coupled with the warm feel of the photo makes this a solid **8/10**',
         'https://i.imgur.com/wDKqDCC.jpg \nWow, what a high fidelity photo! What I find especially exciting about this picture is how much of it is Pom: Almost 100%! And I know my percentages, I\'m a bot, percentages are like my thing! Anyways, the rating. **8/10**',
         'https://i.imgur.com/F5QlNi1.gif \nO my what a #rare Pom. This one has slow-motion, majestic hair, and this adorable bewildered look on the Pom\'s face. Now THIS is a **9/10**',
         'https://i.imgur.com/4Ixg30D.jpg \nI mean just look at that tongue! Look at how proud they are to show you their tongue! The enthusiasm in the eyes, the paws displayed, and the beautiful, multi-colored coat makes this a solid **8/10**',
         'https://i.imgur.com/526nFhO.jpg \nClearly a unicorn, gotta give this a **0/10** Not even remotely pom-like. [EDITOR\'S NOTE: The Bot\'s pom recognition software is a bit buggy at times, my apologies :c]',
         'https://i.imgur.com/eH9zlHv.jpg \nCute Pumpkin, cute Pom, what more can ya ask for? **8/10**',
         'https://i.imgur.com/Y4iGshS.jpg \nI dislike this pom. Its smug aura mocks me. Eugh I mean look at it. That\'s an \" I make more money than you \", Vineyard Vines, Tesla-drivin\', Dockers-wearin\', pampered pom. I don\'t like \'em...But I guess it *is* a rather cute lookin pom...Fine, this gets a **8/10** ',
         'https://i.imgur.com/J31qXuR.jpg \nNot gonna lie, a pretty basic pom, not complemented by the old pattern on whatever furniture they\'re lying on. This is only gonna get an **8/10** from me, sorry.',
         'https://i.reddituploads.com/09fccb4691614ceea7e488be3c4f95f8?fit=max&h=1536&w=1536&s=3a479c1f25a7d746109a17f3d2ddd6f6 \nOh no, look at this Pom Bandit! You can tell this Pom is a bit of a rood dood, a bad boi, and an all-around rebel. **8/10** ',
         'https://i.imgur.com/mM73fdY.png \nAn angry Pom, yet still an adorable, aproachable Pom. Don\'t let the eyebrows fool ya, this Pom is *YEARNING* for the pets. **8/10** ',
         'https://i.imgur.com/DSskSgE.jpg \nOne of the fluffiest Poms in my collection, but also perhaps on eof teh most unflattering Pom pics. I dunno, to me it looks like they\'ve got a bit of a neck-FUPA goin\' on. Still adorable tho, gotta give this one an **8/10** ',
         'https://i.imgur.com/vxWtGyt.png \nCeci n\'est pas une pom. **huit/dix**',
         'https://i.imgur.com/S36MSPW.png \nR A G I N G  P O M **MGS4times2/10** ',
         'https://i.imgur.com/T8zlZV3.gifv',
         'https://i.imgur.com/d30CJ1m.gifv',
         'https://i.imgur.com/MfCx5.jpg',
         'https://i.redd.it/shn54m069wnx.jpg',
         'https://i.imgur.com/c3DELPR.jpg',
         'https://i.reddituploads.com/d7570f50ef9b43f1b0417dd1f655a766?fit=max&h=1536&w=1536&s=1f943212feb1f6a9c6d98993cc82fd1d',
         'https://i.chzbgr.com/completestore/12/10/28/pnEO6hnk7EuOAl23t1iHvg2.gif',
         'https://i.imgur.com/EIJ3GyV.jpg',
         'https://i.reddituploads.com/de00d7666cf3418b99b91add101fbc88?fit=max&h=1536&w=1536&s=c9c8b1a4fd97ac00c2df010fa42ae37b',
         'https://i.redd.it/5i3246vmaajx.jpg',
         'https://i.imgur.com/T14uvWz.png \nApparently someone\'s favorite. 11/10',
         'https://i.imgur.com/sIpjYeN.png',
         'https://i.imgur.com/6euWy2S.png',
         'https://i.imgur.com/ejDi2Ga.png',
         'https://i.imgur.com/2wmYSOb.gif',
         'https://i.imgur.com/LTqgCb3.jpg',
         'https://i.imgur.com/nBTfgj7.png',
         'https://i.imgur.com/pdbOVzQ.jpg',
         'https://i.imgur.com/eJ79xN9.png',
         'https://i.imgur.com/RE54riA.jpg',
         'https://i.imgur.com/8B4dXs8.png',
         'https://i.imgur.com/Fy3PkVh.jpg',
         'https://i.imgur.com/Hcd7VIk.jpg',
         'https://i.imgur.com/Khlh2HW.jpg',
         'https://i.imgur.com/2ljVihJ.jpg',
         'https://i.imgur.com/RXzv7A5.jpg',
         'https://i.imgur.com/5GO0L9d.jpg',
         'https://i.imgur.com/P3F0wF9.jpg',
         'https://i.imgur.com/1rcAqse.jpg',
         'https://i.imgur.com/eYK7ybD.jpg',
         'https://i.imgur.com/hoMNwfQ.jpg',
         'https://i.imgur.com/YTLHjk0.jpg',
         'https://i.imgur.com/HcGy3Oh.jpg',
         'https://i.imgur.com/uTodqMu.jpg',
         'https://i.imgur.com/g4AziaE.jpg',
         'https://i.imgur.com/eyFbsG1.jpg',
         'https://i.imgur.com/YCpwRn0.png',
         'https://i.imgur.com/cCCymFK.jpg',
         'https://i.imgur.com/xqJBd0e.jpg',
         'https://i.imgur.com/P2KbpkO.jpg',
         'https://i.imgur.com/XhnbxFE.jpg',
         'https://i.imgur.com/QxcjDRl.jpg',
         'https://i.imgur.com/tmxpVX4.jpg',
         'https://i.imgur.com/16v5YTe.jpg',
         'https://i.imgur.com/sN09pRm.jpg',
         'https://i.imgur.com/C7jxbny.jpg',
         'https://i.imgur.com/3mkiiI0.jpg',
         'https://i.imgur.com/hZydT9K.jpg',
         'https://i.imgur.com/XffGbJ8.jpg',
         'https://i.imgur.com/zjzDY8G.jpg',
         'https://i.imgur.com/9HTqliF.jpg',
         'https://i.imgur.com/mwvsAww.jpg',
         'https://i.imgur.com/22qMSRY.jpg',
         'https://i.imgur.com/PuqCoFG.jpg',
         'https://i.imgur.com/5RBCEaR.jpg',
         'https://i.imgur.com/VnlN6tg.jpg',
         'https://i.imgur.com/BXNFKMu.jpg',
         'https://i.imgur.com/oLuBVVE.jpg',
         'https://i.imgur.com/KafZI4B.jpg',
         'https://i.imgur.com/RcXnAMq.jpg',
         'https://i.imgur.com/VO36XVE.jpg',
         'https://i.imgur.com/s9TScL5.jpg',
         'https://i.imgur.com/rz91Nd4.jpg',
         'https://i.imgur.com/qjJW26P.jpg',
         'https://i.imgur.com/vYBz2Iv.jpg',
         'https://i.imgur.com/O2qP5zK.png',
         'https://i.imgur.com/FfH75VD.jpg',
         'https://i.imgur.com/XALquiL.jpg',
         'https://i.imgur.com/h7kRJzA.jpg',
         'https://i.imgur.com/Cwe6OUn.jpg',
         'https://i.imgur.com/H0PmuOH.jpg',
         'https://i.imgur.com/6eNT8uS.jpg',
         'https://i.imgur.com/LkYRaXK.jpg',
         'https://i.imgur.com/Pf1RBnR.jpg',
         'https://i.imgur.com/Se1p7UD.jpg',
         'https://i.imgur.com/Ic9AEid.jpg',
         'https://i.imgur.com/qY2v3UY.jpg',
         'https://i.imgur.com/mnRxSTB.jpg',
         'https://i.imgur.com/OGJNysS.png',
         'https://i.imgur.com/5xkaEIZ.jpg',
         'https://i.imgur.com/43d1cpv.jpg',
         'https://i.imgur.com/PvI4YJ3.jpg',
         'https://i.imgur.com/uXA1Uht.jpg',
         'https://i.imgur.com/YgAV8Hu.jpg',
         'https://i.imgur.com/50iOB1m.jpg',
         'https://i.imgur.com/P8gthzt.jpg',
         'https://i.imgur.com/P8gthzt.jpg',
         'https://i.imgur.com/vuLUSkj.jpg',
         'https://i.imgur.com/FO4YVGv.jpg',
         'https://i.imgur.com/sYL96ue.jpg',
         'https://i.imgur.com/v2PZlbX.jpg',
         'https://i.imgur.com/PvHro0Q.jpg',
         'https://i.imgur.com/bFTvc5u.jpg',
         'https://i.imgur.com/md53raG.jpg',
         'https://i.imgur.com/wmYAQaW.png',
         'https://i.imgur.com/YV97nN5.jpg',
         'https://i.imgur.com/hinSJll.jpg',
         'https://i.imgur.com/tiwhdwz.jpg',
         'https://i.imgur.com/MaMZEk9.jpg',
         'https://i.imgur.com/CKdiWlX.jpg',
         'https://i.imgur.com/wVke31J.jpg',
         'https://i.imgur.com/H9YXDDZ.jpg',
         'https://i.imgur.com/F97qfML.jpg',
         'https://i.imgur.com/h4vpSRi.jpg',
         'https://i.imgur.com/jgR2HyC.jpg',
         'https://i.imgur.com/SdmPoPp.jpg',
         'https://i.imgur.com/I7YVA3c.jpg',
         'https://i.imgur.com/c02hq57.jpg',
         'https://i.imgur.com/x0HCoum.jpg',
         'https://i.imgur.com/KKvPqzx.jpg',
         'https://i.imgur.com/RWqvugg.jpg',
         'https://i.imgur.com/conE2g7.jpg',
         'https://i.imgur.com/4MHlFIz.jpg'
        ];
    var pic = picArray[Math.floor(Math.random() * picArray.length)];

    var responseObject = {
        "!ping": "pong!",
        "!bork": "ruff!",
        "!help": "```Hi, I'm DanBot 9000, an artificial intelligence tasked with providing you with the cutest of pics! Here's the commands. \nType '!bork' to have me say ruff. \nType '!ping' to have me say pong. \nType '!pom' to have a picture of a cute Pomeranian posted! \nMore to come soon bois. \nKeep it fluffy!```",
        "!pom": "here's a pic: " + " " + pic

    }
   if(responseObject[msg.content]) {
    msg.channel.sendMessage(responseObject[msg.content]);
}
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.login("MjY2MDAzMDI2MjYxNzA0NzI1.C06SIQ.3_w0ZOy5LL115zpBw9DAwEdezG4");
