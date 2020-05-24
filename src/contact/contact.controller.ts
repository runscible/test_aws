import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service'

@Controller('contact')
export class ContactController {
    constructor(readonly appService: AppService) {}
    @Get()
    getContact():string {
        return this.appService.getContact()
    }
}
