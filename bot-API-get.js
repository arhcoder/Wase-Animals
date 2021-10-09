// Consigue el JSON de una API //

async function getAPIjson(APIurl)
{
    // Consigue la API //
    const API = await fetch(APIurl);

    // Valida haberla conseguido //
    if (API.ok)
    {
        const json = API.json.json();
        return json;
    }
    else
    {
        // Error 404 //
        let error404 = "Error 404: API no encontrada...";
        console.log(error404);

        throw new Error(error404);
    }
}