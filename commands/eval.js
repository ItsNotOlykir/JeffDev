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
				message.channel.send({
					embed: {
						title: "Success!",
						color: "1048335",
						description: `Input: :inbox_tray:\n\`\`\`js\n${code}\`\`\`\nOutput: :outbox_tray: \`\`\`js\n${util.inspect(evaled, {
							depth: 0}
							)}\`\`\``
					}
				});
			}
		}).catch(err => {
			message.channel.send({
				embed: {
					title: "Error!",
					color: "16715535",
					description: `Input: :inbox_tray:\n\`\`\`js\n${code}\`\`\`\nOutput: :outbox_tray:\n\`\`\`js\n${err}\`\`\``
				}
			});
		});
	}
};

exports.info = {
	name: "eval",
	desc: "evaluate code",
	use: "-eval \'code\'",
	aliases: []
};
