const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(bot.ws.ping)}ms`);
  }

module.exports.help = {
  name:"ping"
}
