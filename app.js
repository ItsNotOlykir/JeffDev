// Edited by AceBoi

const { Client, Collection } = require("discord.js");
const { readdir, stat } = require("fs").promises;
const path = require('path');

const client = new Client();
require("./util/eventLoader")(client);

client.settings = require("./config.json");
client.commands = new Collection();
client.aliases = new Collection();
client.functions = new Collection();
client.musicQueue = new Collection();

const commandsDir = './commands/';
const functionsDir = './functions/';

async function LoadFiles(dir) {
    const files = await readdir(dir);
    const arr = [];
    for (const file of files) {
	const filePath = path.join(dir, file);
	const stats = await stat(filePath);
        if (file.endsWith('.js') && stats.isFile()) {
	    arr.push(require(filePath)); 
	}
    }
    return arr;
};

LoadFiles(commandsDir).then(files => {
    console.log(`Loaded ${files.length} commands`);
    for (const command of files) {
	client.commands.set(command.info.name, command);    
    }
}).catch(console.error)


LoadFiles(functionsDir).then(files => {
    console.log(`Loaded ${files.length} functions`);
    for (const func of files) {
	client.functions.set(func.info.name, func);
    }
}).catch(console.error)

client.login(client.settings.token);
console.log(client.commands)