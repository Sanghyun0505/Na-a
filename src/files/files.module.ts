import { Module } from '@nestjs/common'
import { FilesService } from './files.service'
import { AzureStorageModule } from '@nestjs/azure-storage'
import { FilesController } from './files.controller'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    AuthModule,
    AzureStorageModule.withConfig({
      sasKey: process.env.AZURE_STORAGE_SAS_KEY ?? '?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-07-05T19:41:37Z&st=2023-06-21T11:41:37Z&spr=https&sig=Aw4QDapeMqRbPExHReMN2vs%2BEsstMhfrVOOzvjsY3eo%3D',
      accountName: process.env.AZURE_STORAGE_ACCOUNT ?? 'icarestorage2023x',
      containerName: 'images'
    })
  ],
  providers: [FilesService],
  controllers: [FilesController]
})
export class FilesModule {}
