import express, { Express } from "express";
import { webhookCallback } from "grammy";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import { setHeaders } from "./middlewares/headers";
import { UserRouter } from "./routes/userRoutes";
import { bot } from "./bot";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected ...");
  })
  .catch((error: Error) => console.log(error));

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.use(setHeaders);

app.use("/user", UserRouter);
app.use("/webhook", webhookCallback(bot, "express"));

app.listen(port, () => {
  console.log(`System running at http://localhost:${port}`);
});

const NGROK_URL = "https://4df8-104-223-102-21.ngrok-free.app";
bot.api
  .setWebhook(`${NGROK_URL}/webhook`)
  .then(() => {
    console.log(`Webhook set to ${NGROK_URL}/webhook`);
  })
  .catch((error) => {
    console.error("Failed to set webhook:", error);
  });
