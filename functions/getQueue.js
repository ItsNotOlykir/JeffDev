exports.run = (id) => {
	client = message.client
	queue = client.musicQueue
	id = id

	if(!id) {
		return "Missing arguments"
	} 
	return queue.get(id)


}

exports.info = {
	name: "getQueue",
	desc: "Gets the music queue"
};
