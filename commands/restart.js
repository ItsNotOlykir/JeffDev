exports.run = (client, message) => {
	if (message.author.id !== client.ownerID) return
	message.channel.send('Restarting!')
	setTimeout(function() {
		process.kill(0)
	}, 2000)
}
exports.info = {
	name: 'restart',
	desc: 'Restart the bot',
	use: '-restart',
	aliases: ["r"]
}
