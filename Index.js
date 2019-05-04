const {Client, RichEmbed} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('online');
    console.log(client.user.presence.status);

    const testChannel = client.channels.find(channel => channel.name = 'test');
    console.log(testChannel);
});

client.on('message', async message => {
    console.log(message.content);

    if(message.content === '!ping'){
        message.reply('pong');
    }

    if(message.content === '!hello'){
        message.channel.send(`Hello ${message.author}!`);
        message.delete();
    }

    if(message.content === '!pretty'){
        const embed = new RichEmbed()
        .setTitle('A Pretty Message')
        .setColor('RED')
        .setAuthor('TheFather', 'https://images.vexels.com/media/users/3/151579/isolated/preview/e815f66193dd1a453881fc3d5b9d4384-dibujos-animados-de-animales-de-oso-by-vexels.png')
        /*.addField('Something One', 'Lorem Ipsu')
        .addField('Something One', 'Lorem Ipsu')
        .addField('Something One', 'Lorem Ipsu');*/
        message.channel.send(embed);
    }

    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('Message Deleted');
    }


    if(message.content.startsWith('mmg')){
        message.channel.send(`Hello ${message.author}!`);
    }
});

client.login('NTc0MjU5MTg2OTI2MzU0NDYy.XM2yoA.dHGSMy4hWOpLUrTZrLCEn8gspQY');