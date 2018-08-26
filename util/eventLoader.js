// Require all of the events
const loadEvent = event => require(`../events/${event}`);
module.exports = client => {
	// Load the events
	client.on("ready", () => loadEvent("ready")(client));
	client.on("message", loadEvent("message"));
};
