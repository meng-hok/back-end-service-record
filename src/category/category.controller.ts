import { Controller, Get, Post, Inject, Body, Put } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    @Inject()
    private categoryService: CategoryService;

    @Get("/")
    index() :  Promise<Category[]> { 
        return this.categoryService.findAll();
    }

    @Post("/")
    insert(@Body("category") category : Category) : Category{
        /**
         * { "category" : { 
         *     "name" : "menghok"
         *    "status" : 1
         *      }
         * }
         */
       category.status =1;
       const result = this.categoryService.insert(category);
       return category; 
    }

    @Put("/update")
    async update(@Body("category")  category : Category) {
        try {
            const _category = await this.categoryService.getOne(category.id);
            return this.categoryService.update(category);
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}
