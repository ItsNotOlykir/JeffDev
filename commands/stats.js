const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, args) => {
	const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

	const embed = new Discord.RichEmbed()
		.setColor(2197497).setTitle(`Bot's status!`).setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=67161152`)
		.setThumbnail(client.user.displayAvatarURL)
		.addField("Mem Usage", `**${ (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
		.addField("Uptime", `**${duration}**`)
		.addField("Users", `**${client.users.size - 1}**`)
		.addField(`Servers`, `**${client.guilds.size.toLocaleString()}**`)
		.addField(`Channels`, `**${client.channels.size.toLocaleString()}**`)
		.addField("Discord.js", `**v${Discord.version}**`);

	msg.channel.send({
		embed
	});
};

exports.info = {
	name: "stats",
	desc: "Get the bot's status!",
	use: '-stats',
	aliases: ["status"]
};
