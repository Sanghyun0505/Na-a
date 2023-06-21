import { User } from 'src/user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity()
export class HospitalReview {
  @PrimaryColumn({ name: 'id', nullable: false, type: 'uuid', generated: 'uuid' })
    id: string

  @PrimaryColumn({ name: 'hospital_id', nullable: false, type: 'varchar' })
    hospital_id: string

  @Column({ name: 'user_id', nullable: false, type: 'varchar' })
    user_id: string

  @Column({ name: 'score', nullable: false, type: 'int' })
    score: number

  @Column({ name: 'content', nullable: false, type: 'varchar' })
    content: string

  @Column({ name: 'created_at', nullable: false, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
    user: User
}
