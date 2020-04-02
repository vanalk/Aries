module.exports = {
	name: 'kick',
	description: 'Kick a user from the server.',
    args: false,
    cooldown: 5,
    usage: '<user>',
    guildOnly: true,
	execute(message, args) {
        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) { //mentions.users is a collection
            return message.reply('you need to tag a user in order to kick them!');
        }

        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
