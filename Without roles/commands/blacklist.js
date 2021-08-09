const Discord = require("discord.js");
const noblox = require('noblox.js')
module.exports.run = async (bot, message, args) => {
const config = require('../config.json')
const cookie = config.cookie
process.on('unhandledRejection', (reason, promise) => {
  message.channel.send('Whitelist failed: Incorrect username')
  undefined
})

await noblox.setCookie(cookie)

const fetch = require('node-fetch')
try {
fetch(`https://api.roblox.com/users/get-by-username?username=${args}`)
    .then(res => res.json())
    .then(json => {
        noblox.exile(6486607, json.Id)
        message.channel.send('Blacklisted success')
    });
  }
catch(e) {
    console.log(e)
}
}
module.exports.help = {
  name:"blacklist"
}
