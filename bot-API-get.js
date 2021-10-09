const fetch = require("node-fetch");
const { json } = require("stream/consumers");

// Consigue el JSON de una API //
async function getAPIjson(APIurl)
{
    await fetch(APIurl)
    .then(APIPromise => APIPromise.json())
    .then(json => console.log("JSON conseguido:", json));
    
    return json;
}

module.exports = { getAPIjson };