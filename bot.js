const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', message => {
	if ((message.content.toLowerCase().substring(0, 1) == 'x' ||	message.content.toLowerCase().substring(0, 1) == 'b' || message.content.toLowerCase().substring(0, 1) == 'd' || message.content.toLowerCase().substring(0, 1) == ':' || message.content.toLowerCase().substring(0, 1) == 'v' || message.content.toLowerCase().substring(0, 1) == ' ' || message.content.toLowerCase().substring(0, 1) == 's' || message.content.toLowerCase().substring(0, 1) == '.') && message.content.length > 1 && message.content.toLowerCase().substring(0, 3)!== 'd:') {
		s = message.content.toLowerCase();
		n = 0;
		n2 = 0;
		for (var x = 0; x < s.length; x++){
		    if (s.charAt(x) =='s' || s.charAt(x) ==' '){
			//
		    } else 
		    if (s.charAt(x) == 'x' || s.charAt(x) == 'd' || s.charAt(x) == ':' || s.charAt(x) == 'v' || s.charAt(x) == 'k' || s.charAt(x) == 'b'){
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
	if (message.content.toLowerCase() === 'perdi') {
		message.author.sendMessage("no");
		message.delete(1000);
  	}
	if (message.content.toLowerCase().substring(0, 7) == 'poggers') {
		message.channel.send("https://i.imgur.com/UIgOVb6.gif");
  	}
	if (message.content.toLowerCase().substring(0, 7) == 'render') {
		message.channel.send("che te voy a pasar UNA IMAGEN");
		message.channel.send("https://i.imgur.com/ZAHR47a.png");
  	}
	if (message.content.toLowerCase().substring(0, 4) == 'test' && message.content.length < 5) {
		var array = ["lpm juanba", "dios mio gordo basta", "test", "test", "test", "test", "test", "tenes cara de caca", "puto el que lee", "miralo al gordo escribiendo test", "test"];
    		message.channel.send(chooseFromArray(array));
  	}
	if (message.content.toLowerCase().substring(0, 6) !== 'gnomo,') return;
	
	if (message.content.toLowerCase() === 'gnomo, animators survival kit'||message.content.toLowerCase() === 'gnomo, animacion') {
    		message.channel.send("animators survival kit (en ingles): http://www.floobynooby.com/pdfs/The_Animators_Survival_Kit.pdf");
  	}else
	if (message.content.toLowerCase() === 'gnomo, acs') {
    		message.channel.send("https://zdoom.org/wiki/ACS");
		message.channel.send("acs funcs: https://zdoom.org/wiki/Built-in_ACS_functions");
  	}else
	if (message.content.toLowerCase() === 'gnomo, panic') {
    		message.channel.send("https://i.imgur.com/yKYT3GE.png");
  	}else
	if (message.content.toLowerCase() === 'gnomo, decorate') {
    		message.channel.send("https://zdoom.org/wiki/DECORATE");
		message.channel.send("expresiones: https://zdoom.org/wiki/DECORATE_expressions");
		message.channel.send("actor funcs: https://zdoom.org/wiki/Action_functions");
		message.channel.send("actor flags: https://zdoom.org/wiki/Actor_flags");
  	}else
	if (message.content.toLowerCase() === 'gnomo, version') {
    		message.channel.send("ponele que 1.3 ahi, ultima vez editado en julio 25 de 2019");
  	} else
	if (message.content.toLowerCase() === 'gnomo, navidad' || message.content.toLowerCase() === 'gnomo, navidad!') {
		var arrayicons = [":candy:", ":bell:", ":fireworks:", ":santa:"];
    		var array = ["CHASQUIBUM", "ARBOL DE NAVIDAD", "LUCECITAS", "SANGUCHITOS", "PESEBRE", "FUEGOS ARTIFICIALES", "REGALOS", "SEGUNDA REVOLUCIÓN INDUSTRIAL", "DECORACIONES", "CARBON EN MEDIAS", "MUSICA NAVIDEÑA", "MI POBRE ANGELITO 2", "FAMILIA", "AMOR", 
			    "PAPA NOEL", "CAPITALISMO"];
		var array2 = ["https://images.clarin.com/2016/11/29/S1b7p8gEl_1256x620.jpg", "https://as00.epimg.net/betech/imagenes/2016/12/16/portada/1481919834_730094_1481919951_noticia_normal.jpg","https://fotos00.diariodemallorca.es/mmp/2017/12/08/328x206/adorno-navidad.jpg","http://static.t13.cl/images/sizes/1200x675/1513099619-arbol.jpg","https://www.america-retail.com/static//2018/09/navidad-adornos-tipicos-euroresidentes.jpg","https://okdiario.com/img/2017/12/20/origen-de-la-nochebuena-y-el-dia-de-navidad-2-620x349.jpg", "https://uploads-ssl.webflow.com/59c3fab21e1932000173db91/5bfd5bd8cd67e829b0ea97d3_navidad.jpg", "http://www.studiolum.com/wang/lenin/lenin-and-children-on-christmas-wood-feast.jpg", "https://cdne.diariocorreo.pe/redactor/uploads/2017/12/15/navidad-en-casa.jpg", "https://uy.emedemujer.com/wp-content/uploads/sites/4/2015/12/iStock_000076778145_Small.jpg", "http://assets.tiempo.com.mx/uploads/imagen/imagen/222065/adornos__navidad.jpg"];
    		message.channel.send(":christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree: " + chooseFromArray(array) + " :christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree:");
		message.channel.send(chooseFromArray(array2));
  	} else
	if (message.content === "gnomo, mood de navidad largo") { 
        	var interval = setInterval (function () {
            		// use the message's channel (TextChannel) to send a new message
			var arrayicons = [":candy:", ":bell:", ":fireworks:", ":santa:"];
            		var array = ["CHASQUIBUM", "ARBOL DE NAVIDAD", "LUCECITAS", "SANGUCHITOS", "PESEBRE", "FUEGOS ARTIFICIALES", "REGALOS", "SEGUNDA REVOLUCIÓN INDUSTRIAL", "DECORACIONES", "CARBON EN MEDIAS", "MUSICA NAVIDEÑA", "MI POBRE ANGELITO 2", "FAMILIA", "AMOR", 
			    "PAPA NOEL", "CAPITALISMO", "ES HORA DE PONER UN POCO DE ESPIRITU NAVIDEÑO ACA", "HO HO HO", "FELIZ NAVIDAD Y ESAS MANOS", "NAVIDAD NAVIDAD NANANAVIDAD", "CELEBRA EL NACIMIENTO DEL NENE JESUS", "LASTIMA QUE NO HAY NIEVE POR ACA PERO BUENO", "ESTÁ MEDIO GORDO PAPA NOEL", "YO YA SOY MAYOR PERO QUIERO REGALITOS IGUAL", "SIGAN ASI Y LES REGALO MEDIAS",
				    "HO HO HO HO HO HO ho ho ho COUGH HOHOHO", "FELIIIIZ NAVIDAAAAD", "SE VIENEN LOS SANGUCHITOS, SE  V I E N E N", "AHHHHH COHETES", "SALEN CARAS LAS DECORACIONES DE NAVIDAD POR ESO PONGO IMAGENES", "CHE A PAPA NOEL LO INVENTO COCA COLA #FunFact", "GORRITOS DE NAVIDAD PARA TODOS", "CHE YO NUNCA VI UNO DE ESOS BASTONES DE CARAMELOS EN MI VIDA LA VERDAD", "TENGO HAMBRE", "AHHHHH NO ME MUTEEN", "SABES LA CANTIDAD DE CODIGO QUE VOY A TENER QUE COMENTAR CUANDO TERMINE DICIEMBRE?. UN  M O N T ON.", "CHAMPIONES", "LICEO", "EN REALIDAD EL MEJOR DIA ES DESPUES DE NAVIDAD PORQUE ESTA LLENA DE SANGUCHITOS LA HELADERA. NO ENTENDÉS LO IMPORTANTE QUE ES ESO."];
			var array2 = ["https://images.clarin.com/2016/11/29/S1b7p8gEl_1256x620.jpg", "https://as00.epimg.net/betech/imagenes/2016/12/16/portada/1481919834_730094_1481919951_noticia_normal.jpg","https://fotos00.diariodemallorca.es/mmp/2017/12/08/328x206/adorno-navidad.jpg","http://static.t13.cl/images/sizes/1200x675/1513099619-arbol.jpg","https://www.america-retail.com/static//2018/09/navidad-adornos-tipicos-euroresidentes.jpg","https://okdiario.com/img/2017/12/20/origen-de-la-nochebuena-y-el-dia-de-navidad-2-620x349.jpg", "https://uploads-ssl.webflow.com/59c3fab21e1932000173db91/5bfd5bd8cd67e829b0ea97d3_navidad.jpg", "http://www.studiolum.com/wang/lenin/lenin-and-children-on-christmas-wood-feast.jpg", "https://cdne.diariocorreo.pe/redactor/uploads/2017/12/15/navidad-en-casa.jpg", "https://uy.emedemujer.com/wp-content/uploads/sites/4/2015/12/iStock_000076778145_Small.jpg", "http://assets.tiempo.com.mx/uploads/imagen/imagen/222065/adornos__navidad.jpg",
			     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Christmas_Tree_%281%29.jpg/220px-Christmas_Tree_%281%29.jpg", "http://www.ayrehoteles.com/blog/wp-content/uploads/2014/12/arboles-de-navidad-decorados.jpg", "https://www.okchicas.com/wp-content/uploads/2015/12/25-ideas-de-%C3%A1rboles-de-navidad-originales-18.jpg BO ESTA RE PSICODELICO ESTE", "https://rec-end.elnuevodia.com/images/tn/590/612/2732/3469/473/618/2015/12/09/sb10067750w-001.jpg", "http://www.kissfm.es/wp-content/uploads/2012/12/arbol-de-navidad-decoracion-1-650x488.jpg" , "http://www.1001consejos.com/wp-content/uploads/2012/05/arbol-de-navidad-colorido-regalos-luces-chimenea-escalera.jpg" , "http://buenavida.pr/wp-content/uploads/2016/12/Arbol-de-Navidad.jpg" ];
    			message.channel.send(":christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree: " + chooseFromArray(array) + " :christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree:");
			message.channel.send(chooseFromArray(array2))
            		.catch(console.error); // add error handling here
        	}, ((((1 * 1000)*60)*60)*24) ); 
		message.delete(1000);
    	}
    	if (message.content === "gnomo, mood de navidad") { 
        	var interval = setInterval (function () {
            		// use the message's channel (TextChannel) to send a new message
			var arrayicons = [":candy:", ":bell:", ":fireworks:", ":santa:"];
            		var array = ["CHASQUIBUM", "ARBOL DE NAVIDAD", "LUCECITAS", "SANGUCHITOS", "PESEBRE", "FUEGOS ARTIFICIALES", "REGALOS", "SEGUNDA REVOLUCIÓN INDUSTRIAL", "DECORACIONES", "CARBON EN MEDIAS", "MUSICA NAVIDEÑA", "MI POBRE ANGELITO 2", "FAMILIA", "AMOR", 
			    "PAPA NOEL", "CAPITALISMO", "ES HORA DE PONER UN POCO DE ESPIRITU NAVIDEÑO ACA", "HO HO HO", "FELIZ NAVIDAD Y ESAS MANOS", "NAVIDAD NAVIDAD NANANAVIDAD", "CELEBRA EL NACIMIENTO DEL NENE JESUS", "LASTIMA QUE NO HAY NIEVE POR ACA PERO BUENO", "ESTÁ MEDIO GORDO PAPA NOEL", "YO YA SOY MAYOR PERO QUIERO REGALITOS IGUAL", "SIGAN ASI Y LES REGALO MEDIAS",
				    "HO HO HO HO HO HO ho ho ho COUGH HOHOHO", "FELIIIIZ NAVIDAAAAD", "SE VIENEN LOS SANGUCHITOS, SE  V I E N E N", "AHHHHH COHETES", "SALEN CARAS LAS DECORACIONES DE NAVIDAD POR ESO PONGO IMAGENES", "CHE A PAPA NOEL LO INVENTO COCA COLA #FunFact", "GORRITOS DE NAVIDAD PARA TODOS", "CHE YO NUNCA VI UNO DE ESOS BASTONES DE CARAMELOS EN MI VIDA LA VERDAD", "TENGO HAMBRE", "AHHHHH NO ME MUTEEN", "SABES LA CANTIDAD DE CODIGO QUE VOY A TENER QUE COMENTAR CUANDO TERMINE DICIEMBRE?. UN  M O N T ON.", "CHAMPIONES", "LICEO", "EN REALIDAD EL MEJOR DIA ES DESPUES DE NAVIDAD PORQUE ESTA LLENA DE SANGUCHITOS LA HELADERA. NO ENTENDÉS LO IMPORTANTE QUE ES ESO."];
			var array2 = ["https://images.clarin.com/2016/11/29/S1b7p8gEl_1256x620.jpg", "https://as00.epimg.net/betech/imagenes/2016/12/16/portada/1481919834_730094_1481919951_noticia_normal.jpg","https://fotos00.diariodemallorca.es/mmp/2017/12/08/328x206/adorno-navidad.jpg","http://static.t13.cl/images/sizes/1200x675/1513099619-arbol.jpg","https://www.america-retail.com/static//2018/09/navidad-adornos-tipicos-euroresidentes.jpg","https://okdiario.com/img/2017/12/20/origen-de-la-nochebuena-y-el-dia-de-navidad-2-620x349.jpg", "https://uploads-ssl.webflow.com/59c3fab21e1932000173db91/5bfd5bd8cd67e829b0ea97d3_navidad.jpg", "http://www.studiolum.com/wang/lenin/lenin-and-children-on-christmas-wood-feast.jpg", "https://cdne.diariocorreo.pe/redactor/uploads/2017/12/15/navidad-en-casa.jpg", "https://uy.emedemujer.com/wp-content/uploads/sites/4/2015/12/iStock_000076778145_Small.jpg", "http://assets.tiempo.com.mx/uploads/imagen/imagen/222065/adornos__navidad.jpg",
			     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Christmas_Tree_%281%29.jpg/220px-Christmas_Tree_%281%29.jpg", "http://www.ayrehoteles.com/blog/wp-content/uploads/2014/12/arboles-de-navidad-decorados.jpg", "https://www.okchicas.com/wp-content/uploads/2015/12/25-ideas-de-%C3%A1rboles-de-navidad-originales-18.jpg BO ESTA RE PSICODELICO ESTE", "https://rec-end.elnuevodia.com/images/tn/590/612/2732/3469/473/618/2015/12/09/sb10067750w-001.jpg", "http://www.kissfm.es/wp-content/uploads/2012/12/arbol-de-navidad-decoracion-1-650x488.jpg" , "http://www.1001consejos.com/wp-content/uploads/2012/05/arbol-de-navidad-colorido-regalos-luces-chimenea-escalera.jpg" , "http://buenavida.pr/wp-content/uploads/2016/12/Arbol-de-Navidad.jpg" ];
    			message.channel.send(":christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree: " + chooseFromArray(array) + " :christmas_tree:" + chooseFromArray(arrayicons) + ":christmas_tree:");
			message.channel.send(chooseFromArray(array2))
            		.catch(console.error); // add error handling here
        	}, (((1 * 1000)*60)*60)*4 ); 
		message.delete(1000);
    	} else
	if (message.content.toLowerCase().substring(0, 11) == 'gnomo, deci') {
		//let myRole = message.guild.roles.find("name", "Stop!");
		if (message.member.roles.find("name", "Pink Fluff") ||message.member.roles.find("name", "trastornada") ||message.member.roles.find("name", "sufrimiento") ||message.member.roles.find("name", "Celeste") ||message.member.roles.find("name", "Stop!") || message.member.roles.find("name", "stop") || message.member.roles.find("name", "Captain Obvious")){
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
	if (message.content.toLowerCase() === 'gnomo, gracias' || message.content.toLowerCase() === 'gnomo, gracias!') {
		var array = ["de nada!", "siempre a tu servicio!", "tranqui!", "jaja, de nada!"];
    		message.channel.send(chooseFromArray(array));
  	} else
	if (message.content.toLowerCase() === 'gnomo, es lo mismo?') {
		var array = ["es lo miiiiiismo", "es lo mismo!", "es lo miismo!"];
    		message.channel.send(chooseFromArray(array));
  	} else
	if (message.content.toLowerCase() === 'gnomo, cambia de icono') {
    		message.channel.send("Lo lamento, tenes que comprar uno de nuestros *Paquete De Iconos* para poder cambiar de icono. Yo soy puro programa, lo cosmetico viene aparte. Para visitar nuestro mercado, visite: http://bit.ly/2P1Q7jj");
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
	if (message.content.toLowerCase() === 'gnomo, poggy' || message.content.toLowerCase() === 'gnomo, poggii' || message.content.toLowerCase() === 'gnomo, pogger' || message.content.toLowerCase() === 'gnomo, poggers') {
		var array = ["https://image.shutterstock.com/image-photo/green-plastic-toy-frog-on-260nw-2722112.jpg", "https://image.shutterstock.com/image-photo/toy-frogs-on-white-background-260nw-474573283.jpg", "https://sc01.alicdn.com/kf/HTB1iX5APXXXXXXmXXXXq6xXFXXXP.jpg_350x350.jpg", "https://image.shutterstock.com/image-photo/green-plastic-toy-frog-on-260nw-2722112.jpg", "https://traditionsjewishgifts.com/media/passover-squeaky-frogs-cazpf750-0495-2.JPG"];
    		message.channel.send(chooseFromArray(array));
  	} else 
	if (message.content.toLowerCase() === 'gnomo, penis') {
    		message.channel.send('you will get that at night');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, apc') {
    		message.channel.send('https://vignette.wikia.nocookie.net/gtawiki/images/5/5d/APC-GTAO-front.png/revision/latest?cb=20170614144137');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, liceo') {
    		message.channel.send('chupala');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, dcfgvhbjnkml,ñ') {
    		message.channel.send('dcfgvhbjnkml,ñ');
  	} else 
	if (message.content.toLowerCase() === 'gnomo, puto') {
		var array = ["te gustaria, eh?", "tu cara", "chupala", "uff"];
    		message.channel.send(chooseFromArray(array));
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
	if (message.content.toLowerCase() === 'gnomo, cash money') {
		message.channel.send('https://cdn.discordapp.com/attachments/610055527220903936/617797666495004673/HEm1qGw.jpg');
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
