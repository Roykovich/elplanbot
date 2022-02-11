const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("quick.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tweets")
    .setDescription("Makes this channel to receive tweets."),
  async execute(interaction) {
    const GUILD_ID = interaction.guild.id;
    const CHANNEL_ID = interaction.channel.id;
    // TODO Checks if the guild is registered
    // if (!db.has(interaction.guild.id)) {
    //   db.set(interaction.guild.id, { tweetsChannelId: interaction.channel.id });
    // }

    if (db.has(`${GUILD_ID}.tweetsChannelId`)) {
      db.set(GUILD_ID, { tweetsChannelId: CHANNEL_ID });
      return await interaction.reply(
        "Another channel was setup before but now it's changed to this one :)"
      );
    } else {
      db.set(GUILD_ID, { tweetsChannelId: CHANNEL_ID });
      return await interaction.reply(
        "Now tweets are activated on this channel."
      );
    }
  },
};
