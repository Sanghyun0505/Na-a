export interface ResponseBody<T> {
  success: boolean
  data?: T,
  message?: string
}
