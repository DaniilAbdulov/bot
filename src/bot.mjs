import TeleBot from "telebot"

const bot = new TeleBot({
    token: '7943845483:AAE1MoK14TFXMiaKP52HnE9ckqMfR76_om0',
    polling: {
        interval: 1000,
        timeout: 0,
        limit: 100,
        retryTimeout: 5000
    }
});

const WELCOME_TEXT = "Добро пожаловать!";

const replyMarkup = {
    inlineKeyboard: [
        [
            { text: 'В тренажер', web_app: { url: 'https://tatar-tele.vercel.app' } },
        ],
        [
            { text: 'Новостной канал', url: 'https://t.me/tatarteleteacher' },
        ]
    ]
}

bot.on('/start', (msg) => {
    const chatId = msg.chat.id;
    return bot.sendMessage(chatId, WELCOME_TEXT, {replyMarkup});
});

bot.on('text', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') return;

    return bot.sendMessage(chatId, 'Мин сине анламатым');
});

bot.on('callbackQuery', (msg) => {
    //
});

bot.on("polling_error", (error) => console.log(error));

export default bot
