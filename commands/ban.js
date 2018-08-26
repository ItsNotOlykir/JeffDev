const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const args = params.join(" ");


	if (!args) {
		return message.channel.send("Please specify a user!");
	}
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const reason = args.split(`<@${member.id}> `).join(" ");
	if (!message.member.hasPermission("BAN_MEMBERS")) {
		message.channel.send(client.settings.invalidPermMsg);
		return;
	} else if (member.bannable === false) {
		message.channel.send(`I'm sorry, but **${member.user.tag}** is not able to be banned!`);
	} else {
		message.channel.send({
			embed: {
				title: `${member.user.tag} was banned!`,
				color: 2197497,
				description: `Reason: ${ "**The ban hammer has spoken!**"
					? `**${reason}**`
					: true}\nTime Banned: **${moment.utc(Date.now()).format("dddd, MMMM Do YYYY, HH:mm:ss")}**`
			}
		});
		member.ban(reason);
	}
};

exports.info = {
	name: "ban",
	desc: "Ban a member from the guild",
	use: "-ban \'member | id\'",
	aliases: []
};