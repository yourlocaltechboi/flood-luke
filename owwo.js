const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ass',
	execute(message, args) {
		const luke = client.channels.cache.find(x => x.name == "lukes-dungeon")
		message.luke.send('<@615882904848826389> you\'re such a good boy. ')
		for (var x = 0; x <= 40; x++){
			message.luke.send('<@615882904848826389> <:cum:784134896477405264>')
		}
	},
};
