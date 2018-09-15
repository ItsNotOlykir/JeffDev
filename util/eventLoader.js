const loadEvent = event => require(`../events/${event}`);
module.exports = client => {
	client.on("ready", () => loadEvent("ready")(client));
	client.on("message", loadEvent("message"));
};