import { prefix } from '../config/enviroment';

const name = 'message';
const execute = (message: any) => {
    if (!message.content.startsWith(prefix) || message.author.bot) console.log('return');
    ;

    console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);

    const args: string[] = message.content.slice(prefix.length).trim().split(/ +/);
    const command: string | undefined = args.shift()?.toLowerCase();

    if (!command) return;

    const cmd = message.client.commands.get(command) || message.client.commands.find((cmd: any) => cmd.aliases && cmd.aliases.includes(command));

    if (!cmd) return;

    try {
        cmd.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
};

export { name, execute };