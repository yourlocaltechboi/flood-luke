const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ass',
	execute(message, args) {
		var luke = client.channels.cache.find(x => x.id == "867631196527919104")
		luke.send('<@615882904848826389> you\'re such a good boy. ')
		for (var x = 0; x <= 40; x++){
			luke.send('<@615882904848826389> <:cum:784134896477405264>')
		}
	},
};
