import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
export class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
