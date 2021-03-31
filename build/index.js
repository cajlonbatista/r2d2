"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_1 = require("@typeit/discord");
const dotenv_1 = require("dotenv");
const nasa_1 = require("./src/messages/nasa");
dotenv_1.config();
const prefix = '#';
async function start() {
    const client = new discord_1.Client();
    await client.login(`${process.env.TOKEN}`);
    client.on('message', async (message) => {
        if (message.author.bot)
            return;
        if (!message.content.startsWith(prefix))
            return;
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        switch (command) {
            case 'day':
                nasa_1.onDay(message);
                break;
            default:
                break;
        }
    });
}
start();
//# sourceMappingURL=index.js.map