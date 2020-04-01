const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log(client.user.tag);
});

client.on('message', msg => {
    if (msg.content.startsWith(`${prefix}invite`)) {
        msg.channel.createInvite({ maxUses: 1 })
        .then(invite => msg.channel.send(`Your single use invite is: https://discord.gg/` + invite.code));
    }
});

client.login(token);