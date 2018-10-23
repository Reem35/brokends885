à 14:45
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});


client.on('message', message => {
    
    let args = message.content.split(' ').slice(1).join(' ');
    
  if (message.content === 'ping') {
      message.channel.send(`<@-{message.author.id}> Ping..!`)
  }
  
  
  if (message.content.startsWith('الريفكسbc')) {
          if (!args[0]) {
message.channel.send("**البريفكسbc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});

client.login(process.env.BOT_TOKEN);
