var Discord = require('discord.io');
const Client = new Discord.Client();

client.on('ready', () {
    console.log('listo!');
});

client.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '//') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
		case 'saludo':
			bot.sendMessage({
				to: channelID, 
				message: 'que tal '+ user.username
			});
		break;
         }
     }
});

client.login(process.env.BOT_TOKEN);
