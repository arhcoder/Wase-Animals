"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { MessageEmbed } = require("discord.js");

let { michiWisdomQuoe, michiWisdomPhoto } = require("./bot-michi");
let { lomitoWisdomQuoe, lomitoWisdomPhoto } = require("./bot-lomito");
let { ajolotitoWisdomQuoe, ajolotitoWisdomPhoto } = require("./bot-ajolotito");

console.log("Launching Wase Animals...");

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once).
client.once("ready", () =>
{
	console.log("Wase Animals ready!");
	console.log("🐈");

	client.user.setActivity("🍀 Meditating...");
});

// Detects Discord messages and react.
async function createMessage(message)
{
	// VARIABLES //
	let quoe;
	let photo;

	// COMMAND LIST //
	switch (message.content.toLowerCase())
	{
		// CALLING THE KITTY //
		case "wase kitty":
			quoe = "" + await michiWisdomQuoe();
			photo = "" + await michiWisdomPhoto();

			const michiEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#44086A")
			.setFooter("— 🐈");
			message.reply({ embeds: [michiEmbed] });
		break;

		// CALLING THE DOGGY //
		case "wase doggy":
			quoe = "" + await lomitoWisdomQuoe();
			photo = "" + await lomitoWisdomPhoto();

			const lomitoEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#5C309E")
			.setFooter("— 🐕");
			message.reply({ embeds: [lomitoEmbed] });
		break;

		// CALLING THE AXOLOTL //
		case "wase axolotl":
			quoe = "" + await ajolotitoWisdomQuoe();
			photo = "" + await ajolotitoWisdomPhoto();

			const ajolotitoEmbed = new MessageEmbed()
			.setTitle(quoe)
			.setImage(photo)
			.setColor("#B6086C")
			.setFooter("— 💜");
			message.reply({ embeds: [ajolotitoEmbed] });
		break;

		// CALLING HELP //
		case "wase animals": case "@wase animals":
			const helpEmbed = new MessageEmbed()
			.setTitle("**Wase Animals Commands**")
			.setColor("#300458")
			.setThumbnail(client.user.displayAvatarURL())
			.setDescription("Type a command to get wisdom \nof a wase animal.")

			.addFields(
				{ name: "\u200B", value: "\u200B" },
				{ name: "🐱 :  wase kitty", value: "Type \"wase kitty\" \nto reflection.", inline: true },
				{ name: "🐶 :  wase doggy", value: "Type \"wase doggy\" \nto inspiration.", inline: true },
				{ name: "\u200B", value: "\u200B" },
				{ name: "💖 :  wase axolotl", value: "Type \"wase axolotl\" \nto wisdom.", inline: true },
				{ name: "❓ :  wase animals", value: "Type \"wase animals\" to see \ncommands list.", inline: true },
				{ name: "\u200B", value: "\u200B" },
			)

			.setFooter("Made by @arhcoder 💜", "https://github.com/arhcoder.png");
			message.channel.send({ embeds: [helpEmbed] });
		break;
	
		default:
			// console.log("\nNo command detected...");
		break;
	}
}

// Login to Discord with your client's token.
client.login(TOKEN);

// Actively listen for messages on the Discord server...
client.on("messageCreate", createMessage);