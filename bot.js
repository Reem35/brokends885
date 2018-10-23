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
  
  
  if (message.content.startsWith('.bc')) {
          if (!args[0]) {
message.channel.send("**.bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});
lient.on("message", msg => {//By DEL.25♥♥#1406 || هاشم || Alpha Codes || All copyrights for me & Alpha Codes.
var prefix = '.';// البرفكس
var m = msg.guild.name
var d = msg.guild.memberCount
var p = msg.guild.roles.size
var c = msg.guild.channels.size
var l = msg.guild.region
var o = msg.guild.iconURL
var k = msg.guild.owner
var i = msg.guild.emojis.size
var b = msg.guild.members.filter(m => m.user.bot).size
var h = d - b
var cre = `${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``
var t = msg.guild.channels.filter(e => e.type === "text")
var v = msg.guild.channels.filter(e => e.type === "voice")
var pow = msg.guild.verificationLevel
var e = msg.guild.emojis.size
var e2 = msg.guild.emojis.array()
var afk = msg.guild.afkChannel
var ID = msg.guild.id
if (msg.content.startsWith(prefix + "معلومات السيرفر")){
var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(o)
.addField("👑**ريْس السيرفر**👑⤵", k, true)
.addField("📜**اسم السيرفر**📜⤵", m, true)
.addField("🆔**ايدي السيرفر**🆔⤵", ID, true)
.addField("👥**كل الاعضاء**🤖⤵", d, true)
.addField("📕**الرتب**📕⤵", p, true)
.addField("📕**القنوات**📕⤵", c, true)
.addField("🌐**نوع السيرفر**🌐⤵", l, true)
.addField("🤖**البوتات**🤖⤵", b, true)
.addField("👥**الاشخاص**👥⤵", h, true)
.addField("📝**الرومات الكتابيه**📝⤵", `${t.size}`, true)
.addField("🔒**مستوى حماية السيرفر**🔒⤵", pow, true)
.addField("🎤**الرومات الصوية**🎤⤵", `${v.size}`, true)
.addField("📆**تم انشاء السيرفر في**📆⤵", cre,true)
.addField("🛏غرفت النوم🛏⤵", afk, true)
msg.channel.sendEmbed(embed);
}
});//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.                                                   lient.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".السعودية") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇦 🕌 الاذان في السعودية 🕌 🇸🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502484545556316174/unknown.png")
msg.channel.sendEmbed(embed20).then(SA => {
   SA.react('🇸🇦').then(() => SA.react('🇸🇦'))    
})
}                      
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".مصر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇪🇬 🕌 الاذان في مصر 🕌 🇪🇬")
.setImage("https://cdn.discordapp.com/attachments/501948394286350356/502486345537683456/unknown.png")
msg.channel.sendEmbed(embed20).then(M => {
M.react('🇪🇬').then(() => M.react('🇪🇬'))
})
   }
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".العراق") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇮🇶 🕌 الاذان في العراق 🕌 🇮🇶")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494601525985280/unknown.png")
msg.channel.sendEmbed(embed20).then(I => {
I.react('🇮🇶').then(() => I.react('🇮🇶'))
})
                                    }
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".المغرب") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇲🇦 🕌 الاذان في المغرب 🕌🇲🇦 ")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502494027375968266/unknown.png")
msg.channel.sendEmbed(embed20).then(A => {
A.react('🇲🇦').then(() => A.react('🇲🇦'))
})  
}
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".الجزائر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇩🇿 🕌 الاذان في الجزائر 🕌 🇩🇿")
.setImage("https://cdn.discordapp.com/attachments/502487711249203240/503300078295973900/unknown.png")
msg.channel.sendEmbed(embed20).then(D => {
D.react('🇩🇿').then(() => D.react('🇩🇿'))
})  
}
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".سوريا") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇸🇾 🕌 الاذان في سوريا 🕌 🇸🇾")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502495763549388800/unknown.png")
msg.channel.sendEmbed(embed20).then(S => {
S.react('🇸🇾').then(() => S.react('🇸🇾'))
})  
}
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".الأردن") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇯🇴 🕌 الاذان في الأردن 🕌 🇯🇴")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496095570624533/unknown.png")
msg.channel.sendEmbed(embed20).then(J => {
J.react('🇯🇴').then(() => J.react('🇯🇴'))
})
   }
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === "-تونس") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇹🇳 🕌 الاذان في تونس 🕌 🇹🇳")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(T => {
T.react('🇹🇳').then(() => T.react('🇹🇳'))
})  
}
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".فلسطين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇵🇸 🕌 الاذان في فلسطين 🕌 🇵🇸")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502496873073082394/unknown.png")
msg.channel.sendEmbed(embed20).then(P => {
P.react('🇵🇸').then(() => P.react('🇵🇸'))
})  
}
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === ".قطر") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇶🇦 🕌 الاذان في قطر 🕌 🇶🇦")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497346207219742/unknown.png")
msg.channel.sendEmbed(embed20).then(Q => {
Q.react('🇶🇦').then(() => Q.react('🇶🇦'))
})  
   }
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
 
client.on('message', msg => {//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
   if(msg.content === "-البحرين") {
var embed20 = new Discord.RichEmbed()
.setTitle("🇧🇭 🕌 الاذان في البحرين 🕌 🇧🇭")
.setImage("https://cdn.discordapp.com/attachments/499383925924429837/502497608284241940/unknown.png")
msg.channel.sendEmbed(embed20).then(B => {
B.react('🇧🇭').then(() => B.react('🇧🇭'))
})  
   }
                                               
                                   
 });//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.                                                        const developers = ["ايدي حقك","",""]
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now Playig   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now Watching   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now Listening   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Now Streaming   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.BOT_TOKEN);
