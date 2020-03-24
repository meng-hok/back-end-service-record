import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupRepository } from './group.repository';
import { Group } from './group.entity';
import { Unit } from './unit.entity';
import { UnitRepository } from './unit.reposity';

@Module({
  imports : [TypeOrmModule.forFeature([Group,GroupRepository,Unit,UnitRepository])],
  controllers: [RecordController],
  providers: [RecordService]
})
export class RecordModule {}
