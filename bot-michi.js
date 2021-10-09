let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un michito sabio //
function michiWisdom()
{
    // Obtiene la foto //
    var michiPhotoJSON = getAPIjson("https://api.thecatapi.com/v1/images/search");
    var michiPhoto = michiPhotoJSON.data[0].url;

    // Obtiene la frase //
    var michiQuoeJSON = getAPIjson("https://api.quotable.io/random?tags=famous-quotes");
    var michiQuoe = michiQuoeJSON.content;

    // Junta el mensaje del michi hacia Discord //
    var michiMessage = "**\"" + michiQuoe + "\"**\n— 🐈\n" + michiPhoto;

    console.log("\nlink del michi: ", michiPhoto, "\n");
    console.log("\nmensaje del michi: ", michiQuoe, "\n");
    
    return michiMessage;
}

module.exports = { michiWisdom };