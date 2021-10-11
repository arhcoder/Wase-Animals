let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un lomito sabio //
async function lomitoWisdom()
{
    // Obtiene la foto //
    let lomitoPhotoJSON = await getAPIjson("https://dog.ceo/api/breeds/image/random");
    let lomitoPhoto = lomitoPhotoJSON.message;

    // Obtiene la frase //
    let lomitoQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=inspirational");
    let lomitoQuoe = lomitoQuoeJSON.content;

    // Junta el mensaje del lomito hacia Discord //
    let lomitoMessage = "**\"" + lomitoQuoe + "\"**\n— 🐕\n" + lomitoPhoto;

    // Mensajes al log para depurar //
    // console.log("\nlink del lomito: ", lomitoPhoto, "\n");
    // console.log("\nmensaje del lomito: ", lomitoQuoe, "\n");
    
    return lomitoMessage;
}

module.exports = { lomitoWisdom };