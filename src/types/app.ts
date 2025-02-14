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
  telBotId: string;
  telBotUserName?: string | null;
  telBotLink: string
}

export type TUserCreate = {
  telBotId: number;
  telBotUserName?: string | null;
  telBotChatId: number;
}
