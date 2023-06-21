import { User } from 'src/user/entities/user.entity'
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Daily } from '../../daily/entities/daily.entity'

export enum ChildrenGender {
  MALE,
  FEMALE
}

@Entity()
export class Child {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid', nullable: false })
    id: string

  @Column({ name: 'name', type: 'varchar', nullable: false })
    name: string

  @Column({ name: 'gender', type: 'enum', enum: ChildrenGender, nullable: false })
    gender: ChildrenGender

  @Column({ name: 'profile_image', type: 'varchar', nullable: true })
    profileImage: string

  @Column({ name: 'birthdate', type: 'date', nullable: true })
    birthdate: Date | null

  @Column({ name: 'height', type: 'decimal', precision: 5, scale: 2, nullable: true })
    height: number | null

  @Column({ name: 'weight', type: 'decimal', precision: 6, scale: 2, nullable: true })
    weight: number | null

  @Column({ name: 'blood_type', type: 'varchar', nullable: true })
    bloodType: string | null

  @Column({ name: 'allergies', type: 'simple-array', nullable: true })
    allergies: string[] | null

  @Column({ name: 'medications', type: 'simple-array', nullable: true })
    medications: string[] | null

  @Column({ name: 'medical_records', type: 'text', nullable: true })
    medicalRecords: string | null

  // Define the relationship with Parent entity
  @ManyToOne(() => User, user => user.children)
    parent: User

  @OneToMany(() => Daily, daily => daily.child)
    daily: Daily[]
}
