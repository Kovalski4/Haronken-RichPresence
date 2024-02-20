const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('PLAYING')
    .setURL('oyna.haronken.com.tr')
    .setState('Vanilla')
    .setName('Minecraft')
    .setDetails('oyna.haronken.com.tr')
    .setParty({
      max: 60,
      current: 29,
    })
    .setStartTimestamp(Date.now())
    .setAssetsLargeText('Idle')
    .setAssetsSmallImage('1209442097741041674') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('BETA sürecinde seni de aramızda görmek isteriz!')
    .addButton('Discord', 'https://discord.gg/Gp6GTsCyAr');

  client.user.setPresence({ activities: [status] });
});

client.login(process.env.DISCORD_USER_TOKEN);