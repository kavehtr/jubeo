import { IExpressParams } from "../types/app";

export const UserLoginController = async ({
  req,
  res,
  next,
}: IExpressParams) => {
  const { telBotId, telBotLink, telBotUserName } = req.body;

  console.log(telBotId, telBotLink, telBotUserName);
  res.send("nice");
  next();
};
