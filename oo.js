const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ass',
	execute(message, args) {
		const luke = client.channels.cache.fetch("867631196527919104")
		await luke.send('<@615882904848826389> you\'re such a good boy. ')
		for (var x = 0; x <= 40; x++){
			await luke.send('<@615882904848826389> <:cum:784134896477405264>')
		}
	},
};
