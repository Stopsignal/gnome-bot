const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', message => {
	if (message.content.toLowerCase() === 'gnomo, hola' || message.content.toLowerCase() === 'gnomo, hola!' || message.content.toLowerCase() === 'hola gnomo' || message.content.toLowerCase() === 'hola gnomo!') {
    		message.channel.send('hola che!');
  	} else
    	if (message.content.toLowerCase() === 'gnomo, ping') {
    		message.channel.send('pong!');
  	} else
	if (message.content.toLowerCase() === 'gnomo, putea a doritos') {
    		message.channel.send('lpm doritos');
  	}
	
});
	
client.login(process.env.BOT_TOKEN);
