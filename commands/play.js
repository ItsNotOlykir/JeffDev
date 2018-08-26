exports.run = (client, message, params) => {
if(!params) {
    message.channel.send(`Please specify a song!`)
}

};

exports.info = {
	name: "play",
	desc: "Play a song!",
	use: "play \'song\'",
	aliases: []
};