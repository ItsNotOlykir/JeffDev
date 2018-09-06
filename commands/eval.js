exports.run = (client, message, params) => {
    const util = require('util');
    if(message.author.id !== client.settings.ownerID) return
    async function SomeEvalFunction(code) {
        let evaled;
        try {
            evaled = await eval(code);
        } catch (err) {
            evaled = err;
        }
        const output = util.inspect(evaled, { depth: 0 });
        message.channel.send(`\`\`\`\n${output}\`\`\``)
    }
};

exports.info = {
	name: "eval",
	desc: "evaluate code",
	use: "-code \'code\'"
};