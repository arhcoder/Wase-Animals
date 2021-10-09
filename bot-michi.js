import './bot-API-get.js';

// Regresa el mensaje de un michito sabio //
function michiWisdom()
{
    // Obtiene la foto //
    const michiPhotoAPIjson = getAPIjson("https://api.thecatapi.com/v1/images/search/");
    const michiPhoto = "" + michiPhotoAPIjson.url;

    // Obtiene la frase //
    const michiQuoueAPIjson = getAPIjson("https://api.quotable.io/random?tags=famous-quotes");
    const michiQuoe = "" + michiQuoueAPIjson.content;

    // Junta el mensaje del michi hacia Discord //
    const michiMessage = "**/\"" + michiQuoe + "\"**\n— 🐈\n" + michiPhoto;

    return michiMessage;
}