import Discord, { Client } from "discord.js";

export const onReady = function (this: Client) {
  console.log(`Logged in as ${this.user.tag}`);
};

export const onMessage = async function (this: Client, message: Discord.Message) {
  console.log(`<${message.channel.id}> ${message.author.tag}: ${message.content}`);
};

export const onError = async function (this: Client, err: Error) {
  console.error(err);
}