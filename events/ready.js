module.exports = async (client) => {
   console.log(
      `______________________________\n❯ Logged in as ${
         client.user.username
      }\n❯ Guilds: ${
         client.guilds.cache.size
      }\n❯ Users: ${client.guilds.cache
         .reduce((a, b) => a + b.memberCount, 0)
         .toLocaleString()}\n______________________________`
   );
};
