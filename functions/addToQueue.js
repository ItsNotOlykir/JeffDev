exports.run = (id, info) => {
    client = message.client
    queue = client.musicQueue
    id = id
    info = info
    if(!id || !info) {
        return "Missing arguments!"
    }

    
    return queue.get(id)



}

exports.info = {
	name: "addToQueue",
	desc: "Adds something to the queue"
};
