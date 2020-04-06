import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryReposity } from './category.repository';
import { MyMiddle } from './middleware/category.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Category,CategoryReposity])],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(MyMiddle)
      .forRoutes("category")
  }
}
