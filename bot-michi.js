let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un michito sabio //
async function michiWisdom()
{
    // Obtiene la foto //
    let michiPhotoJSON = await getAPIjson("https://api.thecatapi.com/v1/images/search");
    let michiPhoto = michiPhotoJSON[0].url;

    // Obtiene la frase //
    let michiQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=famous-quotes");
    let michiQuoe = michiQuoeJSON.content;

    // Junta el mensaje del michi hacia Discord //
    let michiMessage = "**\"" + michiQuoe + "\"**\n— 🐈\n" + michiPhoto;

    // Mensajes al log para depurar //
    // console.log("\nlink del michi: ", michiPhoto, "\n");
    // console.log("\nmensaje del michi: ", michiQuoe, "\n");
    
    return michiMessage;
}

module.exports = { michiWisdom };