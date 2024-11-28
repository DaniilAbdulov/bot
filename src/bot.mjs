import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

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

export default bot
