import { Group } from "./group.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Group)
export class GroupRepository extends Repository<Group> {
    
}