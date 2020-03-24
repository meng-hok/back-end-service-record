import { Category } from "src/category/category.entity";
import { Repository, EntityRepository } from "typeorm";
import { Unit } from "./unit.entity";

@EntityRepository(Unit)
export class UnitRepository extends Repository<Unit> {
   
    

}