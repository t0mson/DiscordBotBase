const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'help',
   description: ['List of all commands.'],
   execute(message, args, client) {
      if (args[1]) {
         const cmd =
            client.commands.get(args[1]) ||
            client.commands.find(
               (cmd) =>
                  cmd.aliases && cmd.aliases.includes(args[1].toLowerCase())
            );

         if (!cmd)
            return message.channel.send(
               `Invaild Command named. \`${args[1]}\``
            );

         const array = [];

         array.push(`**Name: ${cmd.name}**`);

         if (cmd.aliases)
            array.push(`**Aliases:** \`${cmd.aliases.join(' | ')}\``);
         if (cmd.description) array.push(`**Description:** ${cmd.description}`);

         return message.channel.send(array, { split: true });
      } else {
         message.channel.send(
            new MessageEmbed()
               .setColor('BLUE')
               .setAuthor(`${client.user.username}'s Commands`)
               .setDescription(
                  `\`${client.commands.map((cmds) => cmds.name).join(' | ')}\``
               )
               .setFooter(
                  `To get more info about a cmd type: ${client.prefix}help <cmd name>`
               )
         );
      }
   },
};
