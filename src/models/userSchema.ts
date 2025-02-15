import { Entity, Column, Index, Unique } from "typeorm";
import { Main } from "./mainSchema";

@Unique(["telBotId", "telBotUserName", "telBotLink"])
@Entity({ name: "user" })
export class User extends Main {
  @Index()
  @Column({ unique: true, type: "bigint" })
  telBotId!: number;

  @Index()
  @Column({ unique: true, type: "varchar" })
  telBotUserName!: string;

  @Column({ unique: true, type: "text" })
  telBotLink!: string;

  @Column({ nullable: true, type: "jsonb" })
  friends!: { user_id: number; user_name: string }[] | null;

  @Column("bigint")
  coins!: number;

  @Column("bigint")
  referalCoins!: number;
}
