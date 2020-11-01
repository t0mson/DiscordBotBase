module.exports = async (client, message) => {
   if (message.author.bot) return;
   if (message.channel.type === 'dm') return;

   if (!message.content.startsWith(client.prefix)) return;

   const args = message.content.substring(client.prefix.length).split(' ');

   const command =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.find(
         (cmd) => cmd.aliases && cmd.aliases.includes(args[0].toLowerCase())
      );

   if (!command) return;

   command.execute(message, args, client);
};
