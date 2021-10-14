let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un michito sabio //
async function michiWisdomQuoe()
{
    /// Regresa una frase famosa aleatoria; [String quoe].
    let michiQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=famous-quotes");
    let michiQuoe = "\"**" + michiQuoeJSON.content + "\"**";

    return michiQuoe;
}

async function michiWisdomPhoto()
{
    /// Regresa la foto de un gatito aleatorio; [String  url].
    let michiPhotoJSON = await getAPIjson("https://api.thecatapi.com/v1/images/search");
    let michiPhoto = michiPhotoJSON[0].url;

    return michiPhoto;
}

module.exports = { michiWisdomQuoe, michiWisdomPhoto };