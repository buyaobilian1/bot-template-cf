import {TelegramBot} from "../../lib/telegram-bot";

const startCommandHandler = async (bot: TelegramBot) => {
	const replyText = `
进入机器人介绍
	`;
	// const reply_markup= {
	// 	inline_keyboard: [[{text: '飞机VIP', callback_data: 'tgvip'}, {text: '能量租赁', callback_data: 'energy'}]]
	// }

	const reply_markup = {
		keyboard: [[{text: 'keyboard1'}, {text: 'keyboard2'}]],
		resize_keyboard: true,
		// remove_keyboard: true
	}

	return await bot.sendMessage(replyText, {reply_markup});
}

export {
	startCommandHandler
};
