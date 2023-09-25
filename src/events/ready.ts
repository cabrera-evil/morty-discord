import { Client } from 'discord.js';

const name = 'ready';
const execute = (client: Client) => {
    console.log(`Logged in as ${client.user?.tag}`);
};

export { name, execute };