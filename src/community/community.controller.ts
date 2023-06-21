import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { CommunityService } from './community.service'
import { createCommentDto } from './dto/createComment.dto'
import { Request } from 'express'
import { type ResponseBody } from 'src/interface/ResponseBody'
import { type Community } from './entities/community.entity'
import { type User } from 'src/user/entities/user.entity'
import { createCommunityDto } from './dto/createCommunity.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { updateCommunityDto } from './dto/updateCommunity.dto'
import { updateCommentDto } from './dto/updateComment.dto'
import { type Comment } from './entities/comment.entity'
@Controller('community')
export class CommunityController {
  constructor (private readonly communityService: CommunityService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create (@Req() req: Request, @Body() body: createCommunityDto): Promise<ResponseBody<Community>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.createCommunity(user.id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll (): Promise<ResponseBody<Community[]>> {
    return {
      success: true,
      body: await this.communityService.getCommunityList()
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne (@Param('id') id: string): Promise<ResponseBody<Community>> {
    return {
      success: true,
      body: await this.communityService.getCommunityById(id)
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update (@Req() req: Request, @Param('id') id: string, @Body() body: updateCommunityDto): Promise<ResponseBody<Community>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.updateCommunity(user.id, id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove (@Req() req: Request, @Param('id') id: string): Promise<ResponseBody<Community>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.deleteCommunity(user.id, id)
    }
  }

  @UseGuards(AuthGuard)
  @Post(':id/comment')
  async createComment (@Req() req: Request, @Param('id') id: string, @Body() body: createCommentDto): Promise<ResponseBody<Comment>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.createComment(user.id, id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id/comment/:commentId')
  async updateComment (@Req() req: Request, @Param('id') id: string, @Param('commentId') commentId: string, @Body() body: updateCommentDto): Promise<ResponseBody<Comment>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.updateComment(id, commentId, user.id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id/comment/:commentId')
  async deleteComment (@Req() req: Request, @Param('id') id: string, @Param('commentId') commentId: string): Promise<ResponseBody<Comment>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.communityService.deleteComment(user.id, commentId, id)
    }
  }
}
