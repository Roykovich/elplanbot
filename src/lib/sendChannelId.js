module.exports.sendChannelId = async (client, channelId, content) => {
  const channel = client.channels.cache.get(channelId);

  return channel.send(content);
};
