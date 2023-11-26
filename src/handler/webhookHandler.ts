import { IRequest } from "itty-router";
import {TelegramBot} from "../lib/telegram-bot";
import {startCommandHandler} from "./bot/myCommandHandler";
import {testTextHandler} from "./bot/myTextHandler";


const handler = async (request: IRequest, env: Env, ctx: ExecutionContext) => {
	const data = await request.json();
	console.log('update => ', data);

	const bot = new TelegramBot(env);

	bot.onText(/^\/start$/, startCommandHandler);
	bot.onText('测试', testTextHandler);

	await bot.handleWebhook(data);

	return new Response("ok");
}

export default handler;
