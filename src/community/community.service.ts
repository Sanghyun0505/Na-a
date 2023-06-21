import { Injectable, NotFoundException } from '@nestjs/common'
import { Community } from './entities/community.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Comment } from './entities/comment.entity'
import { type updateCommunityDto } from './dto/updateCommunity.dto'
import { type createCommentDto } from './dto/createComment.dto'
import { type updateCommentDto } from './dto/updateComment.dto'
import { type createCommunityDto } from './dto/createCommunity.dto'

@Injectable()
export class CommunityService {
  constructor (
    @InjectRepository(Community)
    private readonly communityRepository: Repository<Community>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {}

  async createCommunity (id: string, community: createCommunityDto): Promise<Community> {
    return await this.communityRepository.save({
      ...community,
      userId: id
    })
  }

  async getCommunityList (): Promise<Community[]> {
    return await this.communityRepository.find({
      relations: {
        user: true
      },
      select: {
        id: true,
        category: true,
        title: true,
        content: true,
        createdAt: true,
        user: {
          id: true,
          userid: true,
          username: true,
          profileImage: true
        }
      }
    })
  }

  async getCommunityById (id: string): Promise<Community> {
    return await this.communityRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'comments', 'comments.user'],
      select: {
        id: true,
        category: true,
        title: true,
        content: true,
        createdAt: true,
        user: {
          id: true,
          userid: true,
          username: true,
          profileImage: true
        },
        comments: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            id: true,
            userid: true,
            username: true,
            profileImage: true
          }
        }
      }
    })
  }

  async updateCommunity (id: string, communityId: string, community: updateCommunityDto): Promise<Community> {
    const updatedCommunity = await this.communityRepository.findOneBy({ id: communityId, userId: id })
    if (!updatedCommunity) throw new NotFoundException('해당 게시글을 찾을 수 없습니다.')

    return await this.communityRepository.save({
      ...updatedCommunity,
      ...community
    })
  }

  async deleteCommunity (id: string, communityId: string): Promise<Community> {
    const deletedCommunity = await this.communityRepository.findOneBy({ id: communityId, userId: id })
    if (!deletedCommunity) throw new NotFoundException('해당 게시글을 찾을 수 없습니다.')

    await this.communityRepository.remove(deletedCommunity)
    return deletedCommunity
  }

  async createComment (id: string, communityId: string, comment: createCommentDto): Promise<Comment> {
    const community = await this.communityRepository.findOneBy({ id: communityId })
    if (!community) throw new NotFoundException('해당 게시글을 찾을 수 없습니다.')

    return await this.commentRepository.save({
      ...comment,
      userId: id,
      communityId
    })
  }

  async updateComment (id: string, communityId: string, commentId: string, comment: updateCommentDto): Promise<Comment> {
    const updatedComment = await this.commentRepository.findOneBy({ id: commentId, communityId, userId: id })
    if (!updatedComment) throw new NotFoundException('해당 댓글을 찾을 수 없습니다.')

    return await this.commentRepository.save({
      ...comment,
      ...updatedComment
    })
  }

  async deleteComment (id: string, commentId: string, communityId: string): Promise<Comment> {
    const deletedComment = await this.commentRepository.findOneBy({ id: commentId, userId: id, communityId })
    if (!deletedComment) throw new NotFoundException('해당 댓글을 찾을 수 없습니다.')

    await this.commentRepository.remove(deletedComment)
    return deletedComment
  }
}
