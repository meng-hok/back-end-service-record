import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordModule } from './record/record.module';
import { NestSessionOptions, SessionModule } from 'nestjs-session';

@Module({
  imports: [TypeOrmModule.forRoot(),CategoryModule, RecordModule,SessionModule.forRoot({  session: { secret: 'keyboard cat' },})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
