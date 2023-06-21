import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Child } from '../../children/entities/child.entity'

@Entity()
export class Daily {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid', nullable: false })
    id: string

  @Column({ name: 'date', type: 'date', nullable: false })
    date: Date

  @Column({ name: 'content', type: 'text', nullable: false })
    content: string

  @ManyToOne(() => Child, child => child.daily)
    child: Child
}
