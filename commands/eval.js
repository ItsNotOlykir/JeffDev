exports.run = async (client, message, params) => {
    if (message.author.id !== client.settings.ownerID) return;
    
    let evaled;
    try {
        evaled = await eval(code);
    } catch (err) {
        evaled = err;
    }
    const output = util.inspect(evaled, { depth: 0 });
    message.channel.send(`\`\`\`js\n${output}\n\`\`\``);
};

exports.info = {
    name: "eval",
    desc: "evaluate code",
    use: "-code \'code\'"
};
