import { Client } from '@typeit/discord';
import { config } from 'dotenv';

import { onDay } from './src/messages/nasa';

config();

const prefix = '#';

async function start() {
  const client = new Client();

  await client.login(`${process.env.TOKEN}`);

  client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
      case 'day':
        onDay(message);
        break;
      default:
        break;
    }
  });
}

start();
