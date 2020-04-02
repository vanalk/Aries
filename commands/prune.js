module.exports = {
	name: 'prune',
    aliases: ['clear'],
	description: 'Delete messages in the current channel.',
    args: true,
    cooldown: 3,
    usage: '<count>',
    guildOnly: true,
	execute(message, args) {
        const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }
    
        message.channel.bulkDelete(amount, true);
	},
};