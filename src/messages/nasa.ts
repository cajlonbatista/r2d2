import axios from 'axios';
import { format } from 'date-fns';

import { Message, MessageEmbed } from 'discord.js';

import { getGreetings } from '../utils/utils';

export const onDay = async (message: Message) => {
  const { data } = await axios.get<{
    title: string,
    url: string,
    explanation: string,
    date: string,
  }>(`https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_KEY}&date=${format(Date.now(), 'yyyy-MM-dd')}`);

  const {
    title, url, explanation, date,
  } = data;

  const loader = await message.reply('🤟 Loading 🤟');

  const card = new MessageEmbed()
    .setColor('#F97B04')
    .setTitle(title)
    .setAuthor(getGreetings())
    .setURL(`https://spacehunter.vercel.app/apod/${date}`)
    .setDescription(explanation)
    .setThumbnail('https://spacehunter.vercel.app/static/media/rocket.585ceaf1.svg')
    .setImage(url)
    .setTimestamp(new Date(date))
    .setFooter('', 'https://spacehunter.vercel.app/static/media/rocket.585ceaf1.svg');

  setTimeout(() => {
    loader.delete();
    message.reply(card);
  }, 4000);
};
