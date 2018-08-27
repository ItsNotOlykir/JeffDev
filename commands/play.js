exports.run = (client, message, params) => {
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(client.settings.keys.youtube);
if(!params) {
    message.channel.send(`Please specify a song!`)
    return
} else {
    var url = params
    var time = '1:20'

    youtube.searchVideos(params.join(""), 1).then(results => {
    client.musicQueue.set(results[0].title, [url, time])
    console.log(results)
    message.channel.send(`Now playing: ${results[0].title} (https://youtube.com/watch?v=${results[0].id}`)
})
}

};

exports.info = {
	name: "play",
	desc: "Play a song!",
	use: "play \'song || url\'",
	aliases: []
};