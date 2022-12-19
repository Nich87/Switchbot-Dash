import SwitchBot from "@lucadiba/switchbot-client";
import * as dotenv from 'dotenv';
dotenv.config();

const switchbot = new SwitchBot({
    openToken: process.env.TOKEN,
    secretKey: process.env.SECRET_KEY,
});


const bot = switchbot.bot(process.env.BOT_ADR);

console.log("現在のステータス:" + String(await bot.getPowerStatus()).toUpperCase());

await bot.getPowerStatus() === 'off' ? bot.turnOn() : bot.turnOff();