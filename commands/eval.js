exports.run = (client, message, params) => {
	if (message.author.id !== client.ownerID)
		return;
	const code = params.join(" ");
	const util = require("util");
	if (code < 1) {
		message.channel.send("Please input some code!")
	} else
	if (code.includes("client.token")) {
		message.channel.send("Unable to eval that code!");
	} else {
		new Promise(r => r(eval(code))).then(evaled => {
			if (util.inspect(evaled, {
					depth: 0
				}).includes(client.token) || util.inspect(evaled, {
					depth: 0
				}).includes(client.token.toLowerCase()) || util.inspect(evaled, {
					depth: 0
				}).includes(client.token.toUpperCase())) {
				message.channel.send("Unable to eval that code!");
			} else {
                message.channel.send(`\`\`\`\n${util.inspect(evaled, {depth: 0})}\`\`\``)
            }
		}).catch(err => {
			console.error(err)
		});
	}
};

exports.info = {
	name: "eval",
	desc: "evaluate code",
	use: "-code \'code\'"
};