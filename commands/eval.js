exports.run = async (client, message, params) => {
    require('util')
    if (message.author.id !== client.settings.ownerID) return;
    let code = params.join(" ")
    const msg = await message.channel.send('Evaluating...');
    let evaled;
    try {
        evaled = await eval(code);
    } catch (err) {
        evaled = err;
    }
    const output = util.inspect(evaled, { depth: 0 });
    msg.edit(`\`\`\`js\n${output}\n\`\`\``);
};

exports.info = {
    name: "eval",
    desc: "evaluate code",
    use: "-code \'code\'"
};
