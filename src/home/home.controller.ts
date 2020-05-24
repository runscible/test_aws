import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service'
@Controller('home')
export class HomeController {
constructor( readonly appService: AppService ){}    
  @Get()
  getHome(): string {
      return this.appService.getHome()
  }
  @Get(':id')  
  getHomeWithId(@Param('id') id : string){
    return this.appService.getHomeWithId(id)
  }
}
