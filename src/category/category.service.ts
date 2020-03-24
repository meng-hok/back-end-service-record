import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CategoryService {
 

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>;

    async insert(category: Category) : Promise<Category> {
       const result = await  this.categoryRepository.insert(category);
        console.log(result);
        return null;
    }
    
    findAll() : Promise<Category[]> {
        return this.categoryRepository.find({"status" : 1 });
    }
    
    async getOne(id: number) : Promise<Category> {
        return this.categoryRepository.findOne({"id":id});
    }

    async update(category : Category)  { 
        return this.categoryRepository.update(category.id,category);
    }
}
