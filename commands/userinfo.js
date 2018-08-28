const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const status = {
	online: "Online",
	idle: "Idle",
	dnd: "Do Not Disturb",
	offline: "Offline/Invisible"
};
exports.run = (client, msg, args) => {
	const member =
		msg.mentions.members.first() ||
		msg.guild.members.get(args[0]) ||
		msg.member;
	if(!member) {
		message.channel.send(`Please specify a user!`)
		return
	}

	let bot;
	if (member.user.bot === true) {
		bot = "Yes";
	} else {
		bot = "No";
	}
	const embed = new Discord.RichEmbed()
		.setColor(2197497)
		.setThumbnail(`${member.user.displayAvatarURL}`)
		.setAuthor(
			`${member.user.tag} (${member.id})`,
			`${member.user.displayAvatarURL}`
		)
		.addField(
			"Nickname:",
			`${
				member.nickname !== null ? `${member.nickname}` : "No nickname"
			}`,
			true
		)
		.addField("Bot?", `${bot}`, true)
		.addField("Status", `${status[member.user.presence.status]}`, true)
		.addField(
			"Playing",
			`${
				member.user.presence.game
					? `${member.user.presence.game.name}`
					: "None!"
			}`,
			true
		)
		.addField(
			"Roles",
			`${member.roles
				.filter(r => r.id !== msg.guild.id)
				.map(roles => `<@&${roles.id}>`)
				.join(" **|** ") || "No Roles"}`,
			true
		)
		.addField(
			"Joined At",
			`${moment
				.utc(member.joinedAt)
				.format("dddd, MMMM Do YYYY, HH:mm:ss")}`,
			true
		)
		.addField(
			"Created At",
			`${moment
				.utc(member.user.createdAt)
				.format("dddd, MMMM Do YYYY, HH:mm:ss")}`,
			true
		);

	msg.channel.send({
		embed
	});
};

exports.info = {
	name: "userinfo",
	desc: "See a user's info",
	use: '-userinfo \'mention\'',
	aliases: ["uinfo"]
};
