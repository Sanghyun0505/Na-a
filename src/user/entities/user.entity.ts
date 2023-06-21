import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Child } from '../../children/entities/child.entity'
import { Community } from 'src/community/entities/community.entity'

export enum UserType {
  FATHER,
  MOTHER
}

@Entity()
export class User {
  @PrimaryColumn({ name: 'id', generated: 'uuid', type: 'uuid', nullable: false })
    id: string

  @Column({ name: 'userid', type: 'varchar', nullable: false, unique: true })
    userid: string

  @Column({ name: 'hash', type: 'char', length: 10, nullable: false })
    hash: string

  @Column({ name: 'password', type: 'varchar', length: 128, nullable: false })
    password: string

  @Column({ name: 'username', type: 'varchar', length: 30, nullable: true })
    username: string

  @Column({ name: 'type', type: 'enum', enum: UserType, nullable: false })
    type: UserType

  @Column({ name: 'profile_image', type: 'varchar', nullable: true })
    profileImage: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'current_timestamp' })
    createdAt: Date

  @OneToMany(() => Child, child => child.parent)
    children: Child[]

  @OneToMany(() => Community, community => community.user)
    communitys: Community[]
}
