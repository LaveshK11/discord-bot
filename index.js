import "dotenv/config.js";
import mongoConnect from './src/connection/connection.js'
import { client } from './src/configuration/bot.js';
import { verifyUser } from './src/commands/commands.js'

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

mongoConnect()

client.login(process.env.TOKEN).then(() => {
    verifyUser()
})







