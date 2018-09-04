exports.run = (client, message) => {
	if(client.musicQueue.get(message.channel.id) < 1) {
        message.channel.send(`There isn't anything queued in **${message.guild.name}**`)
    }
}
exports.info = {
	name: 'queue',
	desc: 'Check the queue',
	use: '-queue',
	aliases: []
}
