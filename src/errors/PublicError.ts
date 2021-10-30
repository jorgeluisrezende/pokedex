import { ErrorCodes } from "../constants"

interface IPublicError {
    code: ErrorCodes,
    message: string,
    statusCode?:number
}

export class PublicError extends Error {
    public code: ErrorCodes
    public message: string
    public name: string = 'PublicError'
    public statusCode: number = 400

    constructor (data: IPublicError) {
      super(data.message)
      this.code = data.code
      this.message = data.message
      
      if (data.statusCode){
        this.statusCode = data.statusCode
      }
    }

    JSON() {
        return {
            'message': this.message,
            'code': this.code
        }
    }
  }
  