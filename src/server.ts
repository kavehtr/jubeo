import express, { Request, Response, Express } from "express";
import { Bot, webhookCallback } from "grammy";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";

dotenv.config();

const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected ...");
  })
  .catch((error: Error) => console.log(error));

const app: Express = express();

app.use(express.json());

const bot = new Bot("7633307322:AAFCkFX5MmEfNY6aorV0qIArWydIcmrkjeA");

bot.command("start", async (ctx) => {
  const id = ctx.from?.id;
  const telBotUserName = ctx.from?.username;
  const telBotLink = ctx.match;
  ctx.reply("Welcome! (jubeo bot test)")

  // return await login
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));

app.use("/webhook", webhookCallback(bot, "express"));

app.listen(port, () => {
  console.log(`System running at http://localhost:${port}`);
});

const NGROK_URL = "https://261e-104-223-102-61.ngrok-free.app";
bot.api
  .setWebhook(`${NGROK_URL}/webhook`)
  .then(() => {
    console.log(`Webhook set to ${NGROK_URL}/webhook`);
  })
  .catch((error) => {
    console.error("Failed to set webhook:", error);
  });
