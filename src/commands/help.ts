import { Message } from 'discord.js';
import { prefix } from '../config/enviroment';

const name = 'help';
const description = 'List all available commands';
const execute = (message: any, args: string[]) => {
  const data = [];
  const { commands } = message.client;

  if (!args.length) {
    data.push('Here\'s a list of all my commands:');
    data.push(commands.map((command: any) => command.name).join(', '));
    data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

    return message.channel.send(data, { split: true });
  }

  const name = args[0].toLowerCase();
  const command = commands.get(name);

  if (!command) {
    return message.reply('that\'s not a valid command!');
  }

  data.push(`**Name:** ${command.name}`);

  if (command.description) data.push(`**Description:** ${command.description}`);
  if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

  message.channel.send(data, { split: true });
};

export { name, description, execute };