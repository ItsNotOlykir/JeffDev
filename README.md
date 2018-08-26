# Jeffery

To start the bot, `cd` into the directory that it is in, in this case it is in, `home/Desktop/Jeffery`, so we would do
```
cd home/Desktop/Jeffery
```
and it will take us there, from there we can use **node** or **pm2**
for node use
```
node app.js
```
and for pm2 used
```
pm2 start app.js --name Jeffery
```
The bot is fully modular, you can add commands, or remove commands, just by deleting a file. you can also create your own commands, but you have to know a little javascript

If you would like the create a new command, use the following code,
```js
exports.run = (client, message) => {
};

exports.info = {
	name: "stats",
	desc: "Get the bot's status!",
	use: '-stats'
};
```