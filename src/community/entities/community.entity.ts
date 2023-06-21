import { User } from 'src/user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Comment } from './comment.entity'

export enum CommunityCategory {
  FREE = 'FREE',
  QNA = 'QNA',
  REVIEW = 'REVIEW'
}

@Entity()
export class Community {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid', nullable: false })
    id: string

  @Column({ name: 'user_id', type: 'uuid', nullable: false })
    userId: string

  @Column({ name: 'category', type: 'enum', enum: CommunityCategory, nullable: false })
    category: CommunityCategory

  @Column({ name: 'title', type: 'varchar', nullable: false })
    title: string

  @Column({ name: 'content', type: 'varchar', nullable: false })
    content: string

  @Column({ name: 'images', type: 'varchar', nullable: true })
    images: string

  @Column({ name: 'created_at', type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.communitys)
    user: User

  @OneToMany(() => Comment, (comment) => comment.community)
    comments: Comment[]
}
