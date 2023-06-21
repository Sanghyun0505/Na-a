import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { HttpExceptionFilter } from './filter/exception.filter'

async function bootstrap (): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter())

  const swaggerOptions = new DocumentBuilder()
    .setTitle('아이케어 API Docs')
    .setDescription('프론트엔드 개발자를 위한 아이케어 백엔드 문서입니다')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3000)
}
void bootstrap()
