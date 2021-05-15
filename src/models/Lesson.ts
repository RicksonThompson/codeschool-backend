import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Module from './Module';

@Entity('lessons')
class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  videoId: string;

  @ManyToOne(() => Module, module => module.lesson, { eager: true })
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @Column()
  module_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Lesson;
