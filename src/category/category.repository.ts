import { Category } from "./category.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Category)
export class CategoryReposity extends Repository<Category>{

}