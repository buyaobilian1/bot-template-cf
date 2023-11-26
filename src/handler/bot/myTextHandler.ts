import {TelegramBot} from "../../lib/telegram-bot";

const testTextHandler =  async (bot: TelegramBot) => {
	const msg = `
	文本消息
	`
	await bot.reply(msg)
	await bot.sendMessage(msg, {parse_mode: 'MarkdownV2'})
}

export {
	testTextHandler
}
