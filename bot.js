const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', message => {
	if (message.content === 'gnomo, ping') {
		message.reply('pong');
	} else
	if (message.content === 'gnomo, putea a doritos') {
		message.reply('sos un pelotudo doritos');
	}
});
	
client.login(process.env.BOT_TOKEN);
