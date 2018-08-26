const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const args = params.join(" ");
	if (!args) {
		message.channel.send("Please specify a user!");
		return;
	}

	const member = message.mentions.members.first() || message.guild.members.get(args[0]);

	const reason = args.split(`<@${member.id}> `).join(" ");

	if (!message.member.hasPermission("KICK_MEMBERS")) {
		message.channel.send(client.settings.invalidPermMsg);
		return;
	} else if (member.kickable === false) {
		message.channel.send(`I'm sorry, but **${member.user.tag}** is not able to be kicked!`);
	} else {
		message.channel.send({
			embed: {
				title: `${member.user.tag} was kicked!`,
				color: 2197497,
				description: `Reason: ${ "**none**"
					? `**${reason}**`
					: true}\nTime kicked: **${moment.utc(Date.now()).format("dddd, MMMM Do YYYY, HH:mm:ss")}**`
			}
		});
		member.kick(reason);
	}
};
exports.info = {
	name: "kick",
	desc: "Kick someone from the server",
	use: '-kick \'member  | id\'',
	aliases: []
};