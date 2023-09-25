// src/config.ts
import { config } from 'dotenv';

config();

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

export { token, prefix, clientId, clientSecret };