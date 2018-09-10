exports.run = (id) => {
	queue = client.musicQueue
	id = id

	if(!id) {
		return "Missing arguments"
	} 


	if(queue.get(id) < 0) {
		return "Nothing in the queue"
	} else {
		return queue.get(id)
	}


}

exports.info = {
	name: "getQueue",
	desc: "Gets the music queue"
};
