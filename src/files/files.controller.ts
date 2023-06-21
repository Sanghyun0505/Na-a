import { Controller, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { FilesService } from './files.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { type UploadedFileMetadata } from '@nestjs/azure-storage'
import { type ResponseBody } from 'src/interface/ResponseBody'
import { AuthGuard } from 'src/auth/auth.guard'
import { Request } from 'express'
import { type User } from 'src/user/entities/user.entity'

@Controller('files')
export class FilesController {
  constructor (
    private readonly filesService: FilesService
  ) {}

  @Post('/')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile (
    @Req()
      req: Request,
      @UploadedFile()
      file: UploadedFileMetadata
  ): Promise<ResponseBody<string>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.filesService.upload(user.id, file)
    }
  }
}
