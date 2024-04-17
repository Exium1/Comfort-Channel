import { Storage } from "@plasmohq/storage"

const getRandomToken = () => {
    var randomPool = new Uint8Array(32);
    var hex = '';
    
    crypto.getRandomValues(randomPool);

    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }

    return hex;
};

const getUserID = () => (
    new Promise(async (resolve, reject) => {

        const storage = new Storage();

        var userID = await storage.get('userID');

        if (userID) {
            resolve(userID);
        } else {
            userID = getRandomToken();
    
            await storage.set("userID", userID);
            resolve(userID);
        }
    })
)


export { getUserID };