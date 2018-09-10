const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const embed = new Discord.RichEmbed().setColor(2197497)
		.setThumbnail(`${message.guild.iconURL}`)
		.setAuthor(message.guild.name, message.guild.iconURL)
		.addField("User Count!", `${message.guild.members.size} users!`, true).addField("Channel Count!", `${message.guild.channels.size} channels!`, true)
		.addField("Roles", `${message.guild.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(", ") || "No Roles"}`, true)
		.addField("Created At", `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, hh:mm:ss")}`, true);

	message.channel.send({
		embed
	});
};

exports.info = {
	name: "guildinfo",
	desc: "Gather information about this guild",
	use: '-guildinfo',
	aliases: ["guildinformation"]
};