


const Discord = require('discord.js');

const client = new Discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
client.login(token);

client.on('message', message => {
  const isnotbot = message.author.id != "668052568932614175";
  const isowner = message.author.id === "472680849570004992";
  const isnotowner = message.author.id != "472680849570004992";
  var commands = ["ping"];
  var ooc = ["shutdown"];

   if(message.content.toLowerCase() === commands[0]) return message.channel.send('ping') 
  
  setInterval(async function(){

        //The code you want to run
        message.channel.send('ping')
        
  }), 0.01;
  if (message.content === prefix+ooc[0]){
    if (isnotowner) return message.channel.send("You are not the owner!")
  if (isowner){
    message.channel.send("Shutting Down...")
    client.destroy();
  }
  }
});


