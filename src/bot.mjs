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

const defaultCommands = ['/start', '/help'];

const WELCOME_TEXT = `Исәнмесез! Әйдәгез, татар телен өйрәник !
Здравствуйте! Давайте изучать татарский язык !`;

const replyMarkup = {
    inline_keyboard: [
        [
            { text: 'В тренажер', web_app: { url: 'https://tatar-tele.vercel.app' } },
        ],
        [
            { text: 'Новостной канал', url: 'https://t.me/tatarteleteacher' },
        ]
    ]
}

bot.on('/start', async(msg) => {
    const chatId = msg.chat.id;

    await bot.sendPhoto(chatId, 'https://cdn2.combot.org/tatarskyshp_by_fstikbot/webp/0xf09f918b.webp');

    return bot.sendMessage(chatId, WELCOME_TEXT, {replyMarkup});
});

bot.on('/help', async(msg) => {
    const chatId = msg.chat.id;

    return bot.sendMessage(chatId, `Для просьб и обращений просьба писать сюда https://t.me/unnamednonamee`);
});

bot.on('text', (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (defaultCommands.includes(text)) return;

    return bot.sendMessage(chatId, 'Мин сине анламатым');
});

bot.on('callbackQuery', (msg) => {
    //
});

bot.on("polling_error", (error) => console.log(error));

export default bot
