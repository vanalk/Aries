const Discord = require('discord.js');

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
            .then(invite => {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Single use invite')
                    .setDescription('Your single use invite is: ' + invite.url)
                
                message.channel.send(exampleEmbed);
            });
    },
};