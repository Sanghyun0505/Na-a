import { User } from 'src/user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Community } from './community.entity'

@Entity()
export class Comment {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid', nullable: false })
    id: string

  @Column({ name: 'user_id', type: 'uuid', nullable: false })
    userId: string

  @Column({ name: 'community_id', type: 'uuid', nullable: false })
    communityId: string

  @Column({ name: 'content', type: 'varchar', nullable: false })
    content: string

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.id)
    user: User

  @JoinColumn({ name: 'community_id' })
  @ManyToOne(() => Community, (community) => community.comments)
    community: Community
}
