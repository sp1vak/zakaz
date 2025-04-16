import requests

TELEGRAM_TOKEN = '8066454173:AAEWftdJbtjREGYonPkG-A3klyPjojZ3omc'
CHAT_IDS = ['5433912238', '6357621540', '500442055', '713265083']  # добавь сюда нужные chat_id

def send_telegram_message(name, phone):
    message = f"📩 Новое сообщение!\n\n👤 Имя: {name}\n📱 Телефон: {phone}"
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"

    for chat_id in CHAT_IDS:
        data = {
            'chat_id': chat_id,
            'text': message
        }
        try:
            response = requests.post(url, data=data)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"[Telegram Error] Ошибка для chat_id {chat_id}: {e}")