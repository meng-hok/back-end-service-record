import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { GroupRepository } from './group.repository';
import { Group } from './group.entity';
import { UnitRepository } from './unit.reposity';
import { Unit } from './unit.entity';

@Injectable()
export class RecordService {
    @InjectRepository(Group)
    groupRepository: GroupRepository;
    
    @InjectRepository(Unit)
    unitRepository : UnitRepository;

    findAllGroup() : Promise<Group[]> {
        return this.groupRepository.find({"status" : 1});
    }
    findAllUnitService() : Promise<Unit[]> {
        return this.unitRepository.find({"status" : 1});
    }

    insertGroupService(group: Group) : Promise<InsertResult> {
        return this.groupRepository.insert(group);
    } 

    insertUnitService(unit:Unit) : Promise<InsertResult>  {
        return this.unitRepository.insert(unit);
    }

}
