exports.run = text => {
	const reversed = text
		.split("")
		.reverse()
		.join("");
	return reversed;
};

exports.info = {
	name: "reverse",
	desc: "Put something in reverse"
};
