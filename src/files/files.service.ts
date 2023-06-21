import { AzureStorageService, type UploadedFileMetadata } from '@nestjs/azure-storage'
import { Injectable } from '@nestjs/common'

@Injectable()
export class FilesService {
  constructor (
    private readonly azureStorage: AzureStorageService
  ) {}

  async upload (id: string, file: UploadedFileMetadata): Promise<string> {
    const currentDate = Math.floor(new Date().getTime() / 1000)
    const targetFile = {
      ...file,
      originalname: `${currentDate}-${id}-${file.originalname}`
    }

    const storageUrl = await this.azureStorage.upload(targetFile)
    return storageUrl
  }
}
