module.exports = client => {
	console.log("I'm Online!");
	// Set the status of the bot
	client.user.setActivity(`Dev Version!!`);
}