import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service'


@Controller('about')
export class AboutController {
constructor(private readonly appService: AppService) { }
    @Get()
    getAbout(): string {
        return this.appService.getAbout()
    }
}
