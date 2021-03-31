"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDay = void 0;
const axios_1 = require("axios");
const date_fns_1 = require("date-fns");
const discord_js_1 = require("discord.js");
const utils_1 = require("../utils/utils");
const onDay = async (message) => {
    const { data } = await axios_1.default.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_KEY}&date=${date_fns_1.format(Date.now(), 'yyyy-MM-dd')}`);
    const { title, url, explanation, date, } = data;
    const loader = await message.reply('🤟 Loading 🤟');
    const card = new discord_js_1.MessageEmbed()
        .setColor('#F97B04')
        .setTitle(title)
        .setAuthor(utils_1.getGreetings())
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
exports.onDay = onDay;
//# sourceMappingURL=nasa.js.map