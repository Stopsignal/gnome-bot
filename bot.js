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
    		message.channel.send(array);
  	} else 
	if (message.content.toLowerCase() === 'gnomo, que te parece?') {
    		message.channel.send('holy fuck');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, que le dijo un pez a otro?' || message.content.toLowerCase() === 'gnomo, que le dice un pez a otro?') {
    		message.channel.send('nada!');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, deci un chiste' || message.content.toLowerCase() === 'gnomo, deci un chiste!') {
    		message.channel.send('uy, por ahora no me acuerdo ninguno, pero seguro con el tiempo me voy a acordar!');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, te quiero' || message.content.toLowerCase() === 'gnomo, te amo') {
    		message.channel.send('yo también!');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, cosas chinas, cuidado') {
    		message.channel.send('):');
  	}
	else 
	if (message.content.toLowerCase() === 'gnomo, perdi') {
    		message.channel.send('@everyone perdi');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, mapinfo') {
    		message.channel.send('https://zdoom.org/wiki/MAPINFO');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, github') {
    		message.channel.send('ahi te envio!');
		message.author.sendMessage("https://github.com/Stopsignal/gnome-bot/blob/master/bot.js");
		message.author.sendMessage("y no te olvides!");
  	}https://dashboard.heroku.com/apps/gnome-bot
	else
	if (message.content.toLowerCase() === 'gnomo, github') {
    		message.channel.send('ahi te envio!');
		message.author.sendMessage("https://dashboard.heroku.com/apps/gnome-bot");
		message.author.sendMessage("el buen shady not very reliable hosting, que bien");
  	}
});

function chooseFromArray(params){
	return params[Math.floor(Math.random() * params.length)];
}
	
client.login(process.env.BOT_TOKEN);
