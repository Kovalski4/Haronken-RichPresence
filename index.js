const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  const getExtendURL = await RichPresence.getExternal(
    client,
    '367827983903490050',
    'https://purepng.com/public/uploads/large/71502582731v7y8uylzhygvo3zf71tqjtrwkhwdowkysgsdhsq3vr35woaluanwa4zotpkewhamxijlulfxcrilendabjrjtozyfrqwogphaoic.png', // Required if the image you use is not in Discord
  );

  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('PLAYING')
    .setURL('https://discord.gg/Gp6GTsCyAr')
    .setState('Ekonomi Vanilla Deneyimi! [1.20.4]')
    .setName('Minecraft')
    .setDetails('oyna.haronken.com.tr')
    .setStartTimestamp(Date.now())
    .setAssetsLargeText('Idle')
    .setAssetsSmallImage('367827983903490050') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('BETA sürecinde seni de aramızda görmek isteriz!')
    .addButton('Discord', 'https://discord.gg/Gp6GTsCyAr');

  client.user.setPresence({ activities: [status] });
});

client.login(process.env.DISCORD_USER_TOKEN);