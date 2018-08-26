const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const role = message.guild.roles.get(params[0]) || message.guild.roles.find("name", params[0])

	const embed = new Discord.RichEmbed().setColor(2197497)
		.setAuthor(role.name, message.guild.iconURL)
		.addField("User Count!", `${role.members.size} users!`, true)
		.addField("Created At", `${moment.utc(role.createdAt).format("dddd, MMMM Do YYYY, hh:mm:ss")}`, true);

	message.channel.send({
		embed
	});

}
exports.info = {
	name: "roleinfo",
	desc: "Display info from a role",
	use: '-roleinfo \'name\'',
	aliases: ["rinfo"]
}
