import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, } from 'express';

@Injectable()
export class MyMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');

    // console.log(req)
    // console.log(req.rawHeaders)
    console.log('Request...');
    next();
  }
}
