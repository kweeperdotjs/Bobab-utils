const Discord = require("discord.js");
const noblox = require('noblox.js')
const config = require('../config.json')
const cookie = config.cookie
const gp = config.group
module.exports.run = async (bot, message, args) => {

process.on('unhandledRejection', (reason, promise) => {
  message.channel.send('Whitelist failed: Incorrect username')
  return
})

await noblox.setCookie(cookie)

const fetch = require('node-fetch')
const mention = message.mentions.members.first()
if (!mention) return message.channel.send("You need to ping someone to whitelist")
if (message.member.hasPermission("MANAGE_SERVER") {
try {
fetch(`https://api.roblox.com/users/get-by-username?username=${args}`)
    .then(res => res.json())
    .then(json => {
        noblox.handleJoinRequest(gp, json.Id, true)
        message.channel.send('Succesfuly whitelisted')
        const role = config.wlroleid
        const gibber = message.guild.roles.cache.get(r => r.id == role)
        mention.addRoles(gibber)
    });
  }
catch(e) {
    console.log(e)
}
} else {
  return
}
}
module.exports.help = {
  name:"whitelist"
}
