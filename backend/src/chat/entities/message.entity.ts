import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text'})
  chatID: string;

  @Column({ type: 'enum', enum: ['request', 'response'] })
  type: string;

  @Column({ type: 'varchar' })
  text: string;
}
