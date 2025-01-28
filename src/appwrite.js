import { Client, Account } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("ai-travel-planner-backend");

export const account = new Account(client);

export { ID } from "appwrite";