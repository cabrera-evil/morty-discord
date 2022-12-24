const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    // Get the command 'price' and wait for input
    data: new SlashCommandBuilder()
        .setName('price')
        .setDescription('Converts ARS to USD')
        .addStringOption(option =>
            option.setName('price')
                .setDescription('Enter the price in ARS')
                .setRequired(true)),
    async execute(interaction) {
        // Get the price from the input
        const price = interaction.options.getString('price');
        // Convert the price to USD
        const result = convertCurrency(parseFloat(price));
        // Send the result to the channel
        const newEmbed = {
            color: 0x0099ff,
            title: 'Price Converter',
            description: `Original price: $${price} ARS \nFinal price: $${result} USD`,
            timestamp: new Date(),
            footer: {
                text: 'Automatically generated message',
            },
        };
        await interaction.reply({
            embeds: [newEmbed]
        });
    }
}

function convertCurrency(price) {
    let argPrice = price;
    let income = argPrice * 0.80;
    let commission = (argPrice + income) * 0.20;
    let conversion = 210;
    let dollarPrice = ((argPrice + income) + commission) / conversion;
    let result = dollarPrice.toFixed(2);

    return result;
}