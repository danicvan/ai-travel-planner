import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("ai-travel-planner-backend");

const account = new Account(client);

export { client, account };