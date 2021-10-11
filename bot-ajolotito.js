let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un ajolotito sabio //
async function ajolotitoWisdom()
{
    // Obtiene la foto //
    let ajolotitoPhotoJSON = await getAPIjson("https://axoltlapi.herokuapp.com/");
    let ajolotitoPhoto = ajolotitoPhotoJSON.url;

    // Obtiene la frase //
    let ajolotitoQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=wisdom");
    let ajolotitoQuoe = ajolotitoQuoeJSON.content;

    // Junta el mensaje del ajolotito hacia Discord //
    let ajolotitoMessage = "**\"" + ajolotitoQuoe + "\"**\n— 💜\n" + ajolotitoPhoto;

    // Mensajes al log para depurar //
    // console.log("\nlink del ajolotito: ", ajolotitoPhoto, "\n");
    // console.log("\nmensaje del ajolotito: ", ajolotitoQuoe, "\n");
    
    return ajolotitoMessage;
}

module.exports = { ajolotitoWisdom };