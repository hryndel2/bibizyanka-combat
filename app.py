import telebot

# Replace with your bot token
TOKEN = '7424531204:AAFH30ro9G0uculI_J6G2MUpiGyMfPHK-3A'

bot = telebot.TeleBot (TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    keyboard = telebot.types.ReplyKeyboardMarkup(row_width=1)
    webAppTest = telebot.types.WebAppInfo("http://localhost/bibicoin/")
    one_butt = telebot.types.KeyboardButton(text="Тестовая страница", web_app=webAppTest)
    keyboard.add(one_butt)
    bot.send_message(message.chat.id, 'Привет, я бот для проверки телеграмм webapps!', reply_markup=keyboard)

bot.infinity_polling()
