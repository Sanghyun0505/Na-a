import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { User } from '../../user/entities/user.entity'

@Entity()
export class Files {
  @PrimaryColumn({ name: 'id', generated: 'uuid', type: 'uuid', nullable: false })
    id: string

  @Column({ name: 'userid', type: 'uuid', nullable: false })
    userid: string

  @Column({ name: 'url', type: 'varchar', nullable: false })
    url: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userid', referencedColumnName: 'id' })
    user: User
}
