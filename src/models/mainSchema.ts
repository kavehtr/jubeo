import { Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Main {
  @Index()
  @PrimaryGeneratedColumn()
  id!: number;
}
