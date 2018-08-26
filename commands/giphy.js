const snek = require('snekfetch')
exports.run = (client, message, params) => {
	const search = params.join("+")
	if(!search) {
		message.channel.send('Please specify a search!')
	} else {
	snek.get(`http://api.giphy.com/v1/stickers/search?q=${search}&api_key=${client.settings.keys.giphy}`)
		.then(r => message.channel.send({
			embed: {
				title: `Success!`,
				image: {
					url: `${r.body.data[0].images.preview_gif.url}`
				}
			}
		}));
}}

exports.info = {
	name: "giphy",
	desc: 'Search giphy',
	use: '-giphy \'search\'',
	aliases: ["gif"]
}
