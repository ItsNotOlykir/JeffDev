exports.run = (client, message, params) => {
	if (!message.member.hasPermission("PIN_MESSAGES")) {
		message.channel.send(client.settings.invalidPermMsg);
	} else if(message.client.user.hasPermission("PIN_MESSAGES") === false) {
		message.channel.send(`It seems im missing the permission to pin messages!`)
	} else {
		const messageText = params.join(" ");
		message.delete()
		message.channel.send(`Annoucment:\n**${messageText}**`).then(p => p.pin());
	}
}
exports.info = {
	name: "announce",
	desc: "Annouce something to the server",
	use: `-announce \"message\"`,
	aliases: []
}