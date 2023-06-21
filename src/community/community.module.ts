import { Module } from '@nestjs/common'
import { CommunityService } from './community.service'
import { CommunityController } from './community.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Community } from './entities/community.entity'
import { Comment } from './entities/comment.entity'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Community, Comment])
  ],
  controllers: [CommunityController],
  providers: [CommunityService]
})
export class CommunityModule {}
