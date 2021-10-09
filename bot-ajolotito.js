// Regresa el mensaje de un ajolotito sabio //
function ajolotitoWisdom()
{
    // Obtiene la foto //
    const ajolotitoPhotoAPIjson = getAPIjson("https://axoltlapi.herokuapp.com/");
    const ajolotitoPhoto = ajolotitoPhotoAPIjson.url;

    // Obtiene la frase //
    const ajolotitoQuoueAPIjson = getAPIjson("https://api.quotable.io/random?tags=wisdom/");
    const ajolotitoQuoe = ajolotitoQuoueAPIjson.content;

    // Junta el mensaje del ajolotito hacia Discord //
    const ajolotitoMessage = "**/\"" + ajolotitoQuoe + "\"**\n— 💜\n" + ajolotitoPhoto;

    return ajolotitoMessage;
}