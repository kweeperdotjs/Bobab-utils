const Discord = require("discord.js");
const noblox = require('noblox.js')
module.exports.run = async (bot, message, args) => {
const config = require('../config.json')
const cookie = config.cookie
const gp = config.group
process.on('unhandledRejection', (reason, promise) => {
  message.channel.send('Whitelist failed: Incorrect username')
  undefined
})

await noblox.setCookie(cookie)

const fetch = require('node-fetch')
if (message.member.hasPermission("MANAGE_SERVER")) {
try {
fetch(`https://api.roblox.com/users/get-by-username?username=${args}`)
    .then(res => res.json())
    .then(json => {
        noblox.exile(gp, json.Id)
        message.channel.send('Blacklisted success')
    });
  }
catch(e) {
    console.log(e)
}
} else {
  return
}
module.exports.help = {
  name:"blacklist"
}
