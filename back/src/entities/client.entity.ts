import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

import { Contact } from "./contact.entity";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 127 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 127 })
  password: string;

  @Column({ length: 13, unique: true })
  tel: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashpassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { Client };
