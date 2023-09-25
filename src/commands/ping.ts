import { Message } from 'discord.js';
import { prefix } from '../config/enviroment';

const name = 'ping';
const description = 'Ping!';
const execute = (message: Message, args: string[]) => {
    message.channel.send('Pong!');
};

export { name, description, execute };