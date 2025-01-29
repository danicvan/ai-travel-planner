import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("ai-travel-planner-backend");

const databases = new Databases(client);

export { client, databases };