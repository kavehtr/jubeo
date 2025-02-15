import { AppDataSource } from "../config/db";
import { User } from "../models/userSchema";
import { TUserLogin } from "../types/app";

export const Login = async ({
  telBotId,
  telBotLink,
  telBotUserName,
  ctx,
}: TUserLogin) => {
  const { nanoid } = await import("nanoid");
  let user = await AppDataSource.manager.findOneBy(User, {
    telBotId: telBotId,
  });

  if (!user) {
    const link = nanoid();
    const user = new User();
    user.telBotId = telBotId;
    user.telBotUserName = telBotUserName || "";
    user.telBotLink = link;
    await AppDataSource.manager.save(user);

    if (telBotLink) {
      const referalUser = await AppDataSource.manager.findOneBy(User, {
        telBotLink: telBotLink,
      });
      if (referalUser) {
        referalUser.coins += 10;
        if (referalUser.friends) {
          referalUser.friends.push({
            user_id: user.id,
            user_name: user.telBotUserName,
          });
          await AppDataSource.manager.save(referalUser);
        }
      }
    }
    ctx.reply(
      `Welcome! You have been successfully registered. Your referral link is ${link}.`
    );
  } else {
    ctx.reply(`You are already registered! Welcome back.`);
  }
};
