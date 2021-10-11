"use strict";

let { michiWisdom } = require("./bot-michi");
let { lomitoWisdom } = require("./bot-lomito");
let { ajolotitoWisdom } = require("./bot-ajolotito");

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});

// Escucha los canales del servidor de Discord y reacciona //
async function createMessage(message)
{
	let reply = "";
	if (message.content === "sabio michi")
	{
		// console.log("\nMensaje detectado: ", message.content);
		reply = "" + await michiWisdom();
		message.reply(reply);
	}
	if (message.content === "sabio lomito")
	{
		// console.log("\nMensaje detectado: ", message.content);
		reply = "" + await lomitoWisdom();
		message.reply(reply);
	}
	if (message.content === "sabio ajolotito")
	{
		// console.log("\nMensaje detectado: ", message.content);
		reply = "" + await ajolotitoWisdom();
		message.reply(reply);
	}
	else
	{
		// console.log("\nNo se detectó nungún comando...");
	}
	// console.log("\nMensaje mandado en discord: \n" + reply + "\n");
}

// Login to Discord with your client's token
client.login(TOKEN);

client.on("messageCreate", createMessage);