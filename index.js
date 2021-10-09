"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const TOKEN = process.env.TOKEN;

client.once("¡Cliente listo!", () => {
	console.log("¡Bot Listo!\n🤖");
});

// Escucha los canales del servidor de Discord y reacciona //
function createMessage(message)
{
	var reply = "";
	if (message.content === "sabio michi")
	{
		reply = michiWisdom();
		message.reply(reply);
		console.log("Ay 1");
	}
	else if (message.content === "sabio lomito")
	{
		reply = lomitoWisdom();
		message.reply(reply);
		console.log("Ay 2");
	}
	else if (message.content === "sabio ajolotito")
	{
		reply = ajolotitoWisdom();
		message.reply(reply);
		console.log("Ay 3");
	}
	else
	{
		console.log("Ay 4");
	}
	console.log("Ajá? " + reply);
}
client.on("messageCreate", createMessage);

client.login(TOKEN);