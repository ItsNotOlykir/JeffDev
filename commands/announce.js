exports.run = (client, message, params) => {
	if(params < 0) {
		message.channel.send('Please specify an annoucment!')
		return
	}
	if (!message.member.hasPermission("PIN_MESSAGES")) {
		message.channel.send(client.settings.invalidPermMsg);
	} else if(message.client.member.hasPermission("PIN_MESSAGES") === false) {
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