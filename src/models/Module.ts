import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Lesson from './Lesson';

import User from './User';

@Entity('modules')
class Module {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Lesson, lesson => lesson.module)
  lesson: Lesson;

  @ManyToOne(() => User, user => user.module, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Module;
