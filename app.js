// Require all modules
const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./config.json");
const fs = require("fs");
const snekfetch = require("snekfetch");
require("./util/eventLoader")(client);
// Set client vars
client.settings = settings;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.functions = new Discord.Collection();
client.supportServer = settings.SupportServer
client.ownerID = settings.ownerID
client.musicQueue = []


// Command handler
fs.readdir("./commands/", (err, files) => {
	if (err) console.error(err);
	console.log(`Loading a total of ${files.length} commands.`);
	files.forEach(f => {
		const props = require(`./commands/${f}`);
		console.log(`Loading Command: ${props.info.name}.`);
		client.commands.set(props.info.name, props);

		// props.info.aliases.forEach(alias => {
		// 	client.aliases.set(alias, props.info.name);
		//   });
		
	});
});
// Function handler
fs.readdir(`./functions/`, (err, files) => {
	if (err) console.log(err);
	console.log(`Loading a total of ${files.length} functions.`);
	files.forEach(e => {
		var functions = require(`./functions/${e}`);
		console.log(`Loading function: ${functions.info.name}`);
		client.functions.set(functions.info.name, functions);
	});
});
// Bot login
client.login(settings.token);
