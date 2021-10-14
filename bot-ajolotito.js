let { getAPIjson } = require("./bot-API-get");

// Regresa el mensaje de un ajolotito sabio //
async function ajolotitoWisdomQuoe()
{
    /// Regresa una frase inspiracional aleatoria; [String quoe].
    let ajolotitoQuoeJSON = await getAPIjson("https://api.quotable.io/random?tags=wisdom");
    let ajolotitoQuoe = "\"**" + ajolotitoQuoeJSON.content + "\"**";
    
    return ajolotitoQuoe;
}

async function ajolotitoWisdomPhoto()
{
    /// Regresa la foto de un ajolotito aleatorio; [String  url].
    let ajolotitoPhotoJSON = await getAPIjson("https://axoltlapi.herokuapp.com/");
    let ajolotitoPhoto = ajolotitoPhotoJSON.url;

    return ajolotitoPhoto;
}

module.exports = { ajolotitoWisdomQuoe, ajolotitoWisdomPhoto };