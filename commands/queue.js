exports.run = (client, message) => {

message.channel.send(client.functions.get("getQueue").run(message.guild.id))

}
exports.info = {
	name: 'queue',
	desc: 'See the queue',
    use: '--queue'
}
