import { Request, Response, NextFunction } from "express";
import { Context } from "grammy";

export interface IExpressParams {
  req: Request;
  res: Response;
  next: NextFunction;
}

export interface IUser {
  id: number;
  telBotId: number;
  telBotUserName: string | null;
  telBotLink: string | null;
  friends: { user_id: number; user_name: string }[] | null;
  coins: number;
  referalCoins: number;
}

export type TUserLogin = {
  telBotId: number;
  telBotUserName?: string | null;
  telBotLink: string;
  ctx: Context
};

export type TUserCreate = {
  ctx: Context;
  telBotId: number;
  telBotUserName?: string | null;
  telBotChatId: number;
};
