import { type ExceptionFilter, Catch, type ArgumentsHost, HttpException } from '@nestjs/common'
import { type Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch (exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()

    response
      .status(status)
      .send({
        success: false,
        reason: status === 404 && !exception.message.includes('_')
          ? 'NOT_FOUND'
          : exception.message
      })
  }
}
