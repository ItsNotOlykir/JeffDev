module.exports = message => {
	const client = message.client;
	if (message.author.id === client.id) return;
	if (!message.content.startsWith(client.settings.prefix)) return;
	const command = message.content
		.split(" ")[0]
		.slice(client.settings.prefix.length)
		.toLowerCase();
	const params = message.content.split(" ").slice(1);
	cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
	if (client.commands.has(command)) {
		cmd = client.commands.get(command)
	}
	if (cmd) {
		cmd.run(client, message, params);
	}
};