const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ass',
	execute(message, args) {
		client.channels.fetch("867631196527919104").then(dungeon => {
			dungeon.send('<@615882904848826389> you\'re such a good boy. ')
			for (var x = 0; x <= 40; x++){
				dungeon.send('<@615882904848826389> <:cum:784134896477405264>')
			}
		})
	},
};
