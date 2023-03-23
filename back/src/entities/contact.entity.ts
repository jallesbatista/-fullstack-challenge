import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 127 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 13, unique: true })
  tel: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}

export { Contact };
