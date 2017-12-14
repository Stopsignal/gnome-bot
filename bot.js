const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', message => {
	if (message.content.toLowerCase().substring(0, 6) !== 'gnomo,') return;
	
	if (message.content.toLowerCase() === 'gnomo, help' || message.content.toLowerCase() === 'gnomo, ayuda') {
    		message.channel.send('que crees que soy, un bot?');
  	} else
	if (message.content.toLowerCase() === 'gnomo, hola' || message.content.toLowerCase() === 'gnomo, hola!' || message.content.toLowerCase() === 'gnomo, saludos' || message.content.toLowerCase() === 'gnomo, que tal?') {
		var array = ["hola che!", "que tal!", "hooooola", "saludos!"];
    		message.channel.send(chooseFromArray(array));
  	} else
    	if (message.content.toLowerCase() === 'gnomo, ping') {
    		message.channel.send('pong!');
  	} else
	if (message.content.toLowerCase() === 'gnomo, putea a doritos' || message.content.toLowerCase() === 'gnomo, doritos' || message.content.toLowerCase() === 'gnomo, ya sabes que hacer') {
		var array = ["lpm doritos", "uff doritos la concha de la lora", "doritos lpm", "uff basta doritos"];
    		message.channel.send(chooseFromArray(array));
  	} else 
	if (message.content.toLowerCase() === 'gnomo, penis') {
    		message.channel.send('you will get that at night');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, liceo') {
    		message.channel.send('chupala');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, puto') {
		var array = ["te gustaria, eh?", "tu cara", "chupala", "uff"];
    		message.channel.send('te gustaría, eh?');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, que te parece?') {
    		message.channel.send('holy fuck');
  	}
	
});

function chooseFromArray(params){
	return params[Math.floor(Math.random() * params.length)];
}
	
client.login(process.env.BOT_TOKEN);
