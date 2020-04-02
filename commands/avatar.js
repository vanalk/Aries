module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
	description: 'Fetch the avatar of a user.',
    args: false,
    cooldown: 3,
    usage: '<user>',
	execute(message, args) {
        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });

        message.channel.send(`${taggedUser.username}'s avatar: ${taggedUser.displayAvatarURL({ format: "png", dynamic: true })}`);
	},
};