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
var prefix = '-';// البرفكس
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
});//حقوق الفا كودز || هاشم ♥ || Alpha Codes || All copyrights for me & Alpha Codes.
client.login(process.env.BOT_TOKEN);
