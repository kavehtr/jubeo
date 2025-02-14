import { Entity, Column, Index, Unique } from "typeorm";
import { Main } from "./mainSchema";

@Unique(["telbotId", "telbotUserName", "telbotLink"])
@Entity({ name: "user" })
export class User extends Main {
  @Index()
  @Column({ unique: true, type: "bigint" })
  telBotId!: string;

  @Index()
  @Column({ unique: true, type: "string" })
  telBotUserName!: string;

  @Column({ unique: true, type: "string" })
  telBotLink!: string;

  @Column({ nullable: true, type: "jsonb" })
  friends!: { user_id: number; user_name: string }[] | null;

  @Column("bigint")
  coins!: number;

  @Column("bigint")
  referalCoins!: number;
}
