import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, HomeController, AboutController, ContactController],
  providers: [AppService],
})
export class AppModule {}
