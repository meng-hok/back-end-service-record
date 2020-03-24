import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordModule } from './record/record.module';

@Module({
  imports: [TypeOrmModule.forRoot(),CategoryModule, RecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
