module.exports = {
	name: 'invite',
    aliases: ['singleuse'],
    description: 'Make a single use invite',
    args: false,
    guildOnly: true,
	execute(message, args) {
        message.channel.createInvite({ 
            maxUses: 1, 
            temporary: true, 
            unique: true, 
            maxAge: 180 
        })
            .then(invite => message.channel.send(`Your single use invite is: https://discord.gg/` + invite.code));
	},
};