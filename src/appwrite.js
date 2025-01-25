import { Client, Databases } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("ai-travel-planner-backend");

export { client, databases };

