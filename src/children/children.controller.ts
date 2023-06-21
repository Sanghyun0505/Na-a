import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { ChildrenService } from './children.service'
import { CreateChildrenDto } from './dto/createChildren.dto'
import { UpdateChildrenDto } from './dto/updateChildren.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { Request } from 'express'
import { type User } from 'src/user/entities/user.entity'
import { Child } from './entities/child.entity'
import { type ResponseBody } from 'src/interface/ResponseBody'
import { DailyService } from 'src/daily/daily.service'
import { Daily } from 'src/daily/entities/daily.entity'
import { createDailyDto } from 'src/daily/dto/createDaily.dto'
import { ApiTags, ApiResponse, ApiParam, ApiBearerAuth, ApiBody } from '@nestjs/swagger'
import { updateDailyDto } from 'src/daily/dto/updateDaily.dto'

@ApiTags('Children')
@Controller('children')
export class ChildrenController {
  constructor (
    private readonly childrenService: ChildrenService,
    private readonly dailyService: DailyService
  ) {}

  @ApiBody({ type: CreateChildrenDto })
  @Post()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 201, type: Child })
  @ApiBearerAuth()
  async create (
    @Req() req: Request,
      @Body() createChildDto: CreateChildrenDto
  ): Promise<ResponseBody<Child>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.childrenService.create(user, createChildDto)
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: [Child] })
  @ApiBearerAuth()
  async findAll (@Req() req: Request): Promise<ResponseBody<Child[]>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.childrenService.findAll(user)
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Child })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  async findOne (@Req() req: Request, @Param('id') id: string): Promise<ResponseBody<Child>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.childrenService.findOne(user, id)
    }
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Child })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  async update (@Req() req: Request, @Param('id') id: string, @Body() updateChildDto: UpdateChildrenDto): Promise<ResponseBody<Child>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.childrenService.update(user, id, updateChildDto)
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Child })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  async remove (@Req() req: Request, @Param('id') id: string): Promise<ResponseBody<Child>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.childrenService.remove(user, id)
    }
  }

  // Daily Section
  @Get(':id/daily')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: [Daily] })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  async findAllDaily (@Param('id') id: string): Promise<ResponseBody<Daily[]>> {
    return {
      success: true,
      body: await this.dailyService.findAll(id)
    }
  }

  @Get(':id/daily/:dailyid')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Daily })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  @ApiParam({ name: 'dailyid', type: String })
  async findOneDaily (@Param('id') id: string, @Param('dailyid') dailyid: string): Promise<ResponseBody<Daily>> {
    return {
      success: true,
      body: await this.dailyService.findOne(id, dailyid)
    }
  }

  @Post(':id/daily')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 201, type: Daily })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: createDailyDto })
  async createDaily (@Param('id') id: string, @Body() body: createDailyDto): Promise<ResponseBody<Daily>> {
    return {
      success: true,
      body: await this.dailyService.create(id, body)
    }
  }

  @Patch(':id/daily/:dailyid')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Daily })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  @ApiParam({ name: 'dailyid', type: String })
  @ApiBody({ type: updateDailyDto })
  async updateDaily (@Param('id') id: string, @Param('dailyid') dailyid: string, @Body() body: updateDailyDto): Promise<ResponseBody<Daily>> {
    return {
      success: true,
      body: await this.dailyService.update(id, dailyid, body)
    }
  }

  @Delete(':id/daily/:dailyid')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: Daily })
  @ApiBearerAuth()
  @ApiParam({ name: 'id', type: String })
  @ApiParam({ name: 'dailyid', type: String })
  async removeDaily (@Param('id') id: string, @Param('dailyid') dailyid: string): Promise<ResponseBody<Daily>> {
    return {
      success: true,
      body: await this.dailyService.remove(id, dailyid)
    }
  }
}
