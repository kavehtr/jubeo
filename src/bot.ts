import { Bot } from "grammy";
import { Login } from "./services/userServices";

const bot = new Bot("7633307322:AAFCkFX5MmEfNY6aorV0qIArWydIcmrkjeA");

bot.command("start", async (ctx) => {
  const telBotId = ctx.from?.id;
  const telBotUserName = ctx.from?.username;
  const telBotLink = ctx.match;

  if (!telBotId) {
    return;
  }

  await Login({ telBotId, telBotLink, telBotUserName, ctx });
});

export { bot };
