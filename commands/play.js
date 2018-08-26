const ytdl = require('ytdl-core')

exports.run = (client, message, params) => {
if(!params) {
    message.channel.send(`Please specify a song!`)
    return
} else {
    var url = params
    var time = '1:20'
    client.musicQueue.set(params, [url, time])
}

};

exports.info = {
	name: "play",
	desc: "Play a song!",
	use: "play \'song || url\'",
	aliases: []
};