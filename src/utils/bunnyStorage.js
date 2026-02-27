import axios from "axios";

export const uploadToBunny = async ({
    storageZone,
    apiKey,
    region,
    fileBuffer,
    remotePath,
    contentType = "application/octet-stream",
}) => {

    // const endpoint = region === "sg" ? `https://storage.bunnycdn.com/${storageZone}/${remotePath}` : `https://${region}.storage.bunnycdn.com/${storageZone}/${remotePath}`;
    const endpoint =
        region === "de"
            ? `https://storage.bunnycdn.com/${storageZone}/${remotePath}`
            : `https://${region}.storage.bunnycdn.com/${storageZone}/${remotePath}`;

    await axios.put(endpoint, fileBuffer, {
        headers: {
            AccessKey: apiKey,
            "Content-Type": contentType,
        },
        maxBodyLength: Infinity,
    });
};
