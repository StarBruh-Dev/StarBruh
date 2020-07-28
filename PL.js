const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'TOKEN_HERE';
const prefix = ';';
var version = '0.0.0'
const fs = require('fs');
const { platform } = require('os');




bot.on('ready', async () => {
    console.log('Bot is online and actual version is ' + version);
    bot.user.setActivity('IN DEVELOPEMENT V' + version)
});

bot.on('message', async Message=>{
    if(Message.content === "cc"){
        Message.reply('Zdar');
    }
});

bot.on('message', async Message=>{
    if(Message.content === "starbruh"){
      Message.reply('Prosím nech ho bejt něco řeší nebo děla.')
    } 
});

bot.on('message', Message=>{

    let args = Message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'discord':
            Message.channel.send('https://discord.gg/WWaqQet')
            break;
    }
})


bot.login(token);
