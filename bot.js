const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', message => {
	if ((message.content.toLowerCase().substring(0, 1) == 'x' || message.content.toLowerCase().substring(0, 1) == 'd' || message.content.toLowerCase().substring(0, 1) == ':' || message.content.toLowerCase().substring(0, 1) == 'v' || message.content.toLowerCase().substring(0, 1) == ' ' || message.content.toLowerCase().substring(0, 1) == 's') && message.content.length > 1) {
		s = message.content.toLowerCase();
		n = 0;
		n2 = 0;
		for (var x = 0; x < s.length; x++){
		    if (s.charAt(x) =='s' || s.charAt(x) ==' '){
			//
		    } else 
		    if (s.charAt(x) == 'x' || s.charAt(x) == 'd' || s.charAt(x) == ':' || s.charAt(x) == 'v'){
			n2+=1;
		    } else { 
			n++;
		   }
		}
		if (n==0 && n2>=2 || n2 > n+2) {
			message.delete(1000);
		}
		//message.channel.send('n: ' + n);
		//message.channel.send('n2: ' + n2);
	}
	if (message.content.toLowerCase().substring(0, 6) !== 'gnomo,') return;
	
	if (message.content.toLowerCase().substring(0, 11) == 'gnomo, deci') {
		//let myRole = message.guild.roles.find("name", "Stop!");
		if (message.member.roles.find("name", "Stop!")){
		    	s = message.content.toLowerCase().substring(12, message.content.length);
			message.delete(1000);
			message.channel.send(s);
		} else {
		       message.channel.send('?');
		}
  	} else
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
    		message.channel.send('uy, por ahora no me acuerdo ninguno, pero seguro con el tiempo me voy a acordar!');//agregar despues
  	} else 
	if (message.content.toLowerCase() === 'gnomo, te quiero' || message.content.toLowerCase() === 'gnomo, te amo') {
    		message.channel.send('yo también!');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, cosas chinas, cuidado' || message.content.toLowerCase() === 'gnomo, cosas chinas') {
    		message.channel.send('):');
  	}
	else 
	if (message.content.toLowerCase() === 'gnomo, perdi') {
    		message.channel.send('@everyone perdi');
  	}
	else 
	if (message.content.toLowerCase() === 'gnomo, molesta a dotter' || message.content.toLowerCase() === 'gnomo, dotter') {
    		message.channel.send('@everyone');
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
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, host') {
    		message.channel.send('ahi te envio!');
		message.author.sendMessage("https://dashboard.heroku.com/apps/gnome-bot");
		message.author.sendMessage("el buen shady not very reliable hosting, que bien");
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, hentai' || message.content.toLowerCase() === 'gnomo, pasa el hentai') {
    		message.channel.send('te juro que me deprimis');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, ultimate doom') {
		var array = ['http://www.theultimatedoom.com/wads/list', "ya vaaa"];
		message.channel.send(chooseFromArray(array));
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, tspg') {
		var array = ['https://allfearthesentinel.net/', "dame un segundo!", "no te lo habia pasado ya al link?"];
		message.channel.send(chooseFromArray(array));
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, deviantart') {
    		message.channel.send('https://stopsignal.deviantart.com/');
		message.channel.send('estan buenos los dibujos no?');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, gojira') {
    		message.channel.send('https://gojirafan1994.deviantart.com/gallery/');
		message.channel.send('DINOSAURS');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, porno' || message.content.toLowerCase() === 'gnomo, pasa el porno' || message.content.toLowerCase() === 'gnomo, pasa los gifs porno') {
		var array = ["y si vas a pornhub mejor?", "busca en google?", "no hay porno del gnomo publico, oops", "no"];
		message.channel.send(chooseFromArray(array));
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, ip' || message.content.toLowerCase() === 'gnomo, ips' ) {
		var array = ['el de franco era 190.188.194.86, el de juanba cambia cada segundo y los otros ni idea?', "franco: 190.188.194.86", "190.188.194.86 para el de franco", "ehhh si para ya te digo"];
		message.channel.send(chooseFromArray(array));
  	}
	else 
	if (message.content.toLowerCase() === 'gnomo, bad vibes') {
		message.channel.send('https://i.imgur.com/Btlb52Y.jpg');
  	}
	else
	if (message.content.toLowerCase() === 'gnomo, jeringo') {
		message.channel.send('aca tenes, ravioles: https://www.dropbox.com/sh/3er6oapxvnwmn7r/AAA1OM1udDPU4tkbkWXLrUF0a?dl=0&lst=');
  	}
});

function chooseFromArray(params){
	return params[Math.floor(Math.random() * params.length)];
}
	
client.login(process.env.BOT_TOKEN);
