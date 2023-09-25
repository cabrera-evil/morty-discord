// src/util/registry.ts
import { REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';

const registerCommands = (client: any, dir: string) => {
    const commandFiles = readdirSync(dir).filter(file => file.endsWith('.ts'));

    for (const file of commandFiles) {
        const { name, description, execute } = require(`../commands/${file.replace('.ts', '')}`);
        client.commands.set(name, { description, execute });
        console.log(`Command ${name} loaded!`);
    }
};

const registerEvents = (client: any, dir: string) => {
    const eventFiles = readdirSync(dir).filter(file => file.endsWith('.ts'));

    for (const file of eventFiles) {
            const { name, execute } = require(`../events/${file.replace('.ts', '')}`);
            
            if (name) {
                client.events.set(name, execute.bind(null, client));
                client.on(name, execute.bind(null, client));
                console.log(`Event ${name} loaded!`);
            }
    }
};

export { registerCommands, registerEvents };