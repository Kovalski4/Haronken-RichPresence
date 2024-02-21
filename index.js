const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();
const keep_alive = require('./keep_alive.js')

client.on('ready', async () => {
  getExtendURL = await RichPresence.getExternal(
    client,
    '367827983903490050',
    'https://i.ibb.co/x6L5BVX/removal-ai-b65445d5-96ed-43fa-8ada-886e26b0c06a-logo-removebg-preview-nsklln3na-transformed.png', // Required if the image you use is not in Discord
  );

  const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/haronken')
    .setState('Çekilişimize katılmak için discord tuşuna tıkla ve katıl!')
    .setName('Minecraft')
    .setDetails('5000₺ ödüllü çekiliş için detaylara bak!')
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(getExtendURL[0].external_asset_path)
    .setAssetsLargeText('Sunucuda oynamayanlar kazansa bile ödül alamaz')
    .setAssetsSmallImage('367827983903490050') // https://discord.com/api/v9/oauth2/applications/367827983903490050/assets
    .setAssetsSmallText('Sunucuda oynamayanlar kazansa bile ödül alamaz')
    .addButton('Discord', 'https://discord.gg/Gp6GTsCyAr');

  client.user.setPresence({ activities: [status] });
});

client.login(process.env.DISCORD_USER_TOKEN);