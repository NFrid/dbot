import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "discord.js";
const client = new Client();

import { onError, onMessage, onReady } from "./hooks";

client.on("ready", onReady);
client.on("message", onMessage);
client.on("error", onError);

client.login(process.env.TOKEN);
