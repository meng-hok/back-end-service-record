import { Controller, Get, Session, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  getHello(@Session() session) {
    console.log(session)
    return {
      message : "megnhok"
    };
  }
  @Get("/set")
  setHello(@Session() session): string {
    console.log(session)
    session.token = "not found"
    return this.appService.getHello();
  }
}
