const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/watch?v=5icFcPkVzMg')
    .setState('Arcade Game')
    .setName('osu!')
    .setDetails('MariannE - Yooh')
    .setParty({
      max: 8,
      current: 1,
    })
    .setStartTimestamp(Date.now())
    .setAssetsLargeText('Idle')
    .setAssetsSmallImage('373370493127884800') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('click the circles')
    .addButton('Beatmap', 'https://osu.ppy.sh/beatmapsets/1391659#osu/2873429');

  client.user.setPresence({ activities: [status] });
});

client.login(process.env.DISCORD_USER_TOKEN);