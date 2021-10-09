// Regresa el mensaje de un lomito sabio //
function lomitoWisdom()
{
    // Obtiene la foto //
    const lomitoPhotoAPIjson = getAPIjson("https://dog.ceo/api/breeds/image/random/");
    const lomitoPhoto = lomitoPhotoAPIjson.message;

    // Obtiene la frase //
    const lomitoQuoueAPIjson = getAPIjson("https://api.quotable.io/random?tags=inspirational/");
    const lomitoQuoe = lomitoQuoueAPIjson.content;

    // Junta el mensaje del lomito hacia Discord //
    const lomitoMessage = "**/\"" + lomitoQuoe + "\"**\n— 🐕\n" + lomitoPhoto;

    return lomitoMessage;
}