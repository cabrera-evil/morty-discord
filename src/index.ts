import { token } from './config/enviroment';
import { registerCommands, registerEvents } from './utils/registry';
import { Client, Collection, GatewayIntentBits } from 'discord.js';

// Create a new client instance
const client: any = new Client({ intents: GatewayIntentBits.Guilds });

// Client properties
client.commands = new Collection();
client.events = new Collection();

// Register commands and events
registerCommands(client, 'src/commands');
registerEvents(client, 'src/events');

// Login to Discord with your client's token
client.login(token);
