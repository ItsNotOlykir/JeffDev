module.exports = client => {
	console.log("I'm Online!");
	// Set the status of the bot
	client.user.setActivity(`-help || ${client.users.size - 1} users!`);
}