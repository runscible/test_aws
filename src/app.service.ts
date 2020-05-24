import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
  getHome(): string {
    return 'hello home'
  }
  getHomeWithId(id: string):string {
    return `el id de home es ${id}`
  } 
  getContact():string {
    return 'hello contact'
  }
  getAbout():string {
    return 'hello about'
  }
}
