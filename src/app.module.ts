import { Module } from '@nestjs/common'
import { CommunityModule } from './community/community.module'
import { UserModule } from './user/user.module'
import { FilesModule } from './files/files.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ChildrenModule } from './children/children.module'
import { AuthModule } from './auth/auth.module'
import { HospitalModule } from './hospital/hospital.module'
import { FestivalModule } from './festival/festival.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'icare.mysql.database.azure.com',
      port: 3306,
      username: process.env.DB_USERNAME ?? 'icare',
      password: process.env.DB_PASSWORD ?? 'care2023!',
      database: process.env.DB_DATABASE ?? 'icare',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
    }),
    CommunityModule,
    UserModule,
    FilesModule,
    ChildrenModule,
    AuthModule,
    HospitalModule,
    FestivalModule
  ]
})
export class AppModule {}
