const TelegramBot = require('node-telegram-bot-api');
const token = '7943845483:AAE1MoK14TFXMiaKP52HnE9ckqMfR76_om0';

const bot = new TelegramBot(token, { polling: true });

const WELCOME_TEXT = `Исәнмесез. Әйдәгез татарча сөйләшергә өйрәник !
Здравствуйте. Давайте научимся говорить по-татарски !`;

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [
                { text: 'В тренажер', web_app: { url: 'https://tatar-tele.vercel.app' } },
            ],
            [
                { text: 'Новостной канал', url: 'https://t.me/tatarteleteacher' },
            ]
        ]
    })
};

const start = () => {
    bot.on('message', (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
        if (text === '/start') {
            return bot.sendMessage(chatId, `${WELCOME_TEXT}`, options);
        }

        return bot.sendMessage(chatId, 'Мин сине анламатым');
    });

    bot.on('callback_query', (msg) => {
        //
    });

    bot.on("polling_error", console.log);
}

start();