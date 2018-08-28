exports.run = (client, message, params) => {
	if(!params.join(" ")) {
		message.channel.send('Please specify an annoucment!')
		return
	}
	if (!message.member.hasPermission("PIN_MESSAGES")) {
		message.channel.send(client.settings.invalidPermMsg);
		
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