const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('listo!');
});

client.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'gnomo, ') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
	args = args.splice(1);
	switch(cmd) {
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
         }
     }
});
	
client.login(process.env.BOT_TOKEN);
