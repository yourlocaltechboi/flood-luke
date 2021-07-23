const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ass',
	execute(message, args) {
		var luke = await client.channels.cache.find(x => x.id == "352496750327496725")
		luke.send('<@615882904848826389> you\'re such a good boy. ')
		for (var x = 0; x <= 40; x++){
			luke.send('<@615882904848826389> <:cum:784134896477405264>')
		}
	},
};
