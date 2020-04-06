import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordRepository } from './record.repository';
import { Record } from './record.entity';
import { Unit } from './unit.entity';
import { UnitRepository } from './unit.reposity';

@Module({
  imports : [TypeOrmModule.forFeature([Record,RecordRepository,Unit,UnitRepository])],
  controllers: [RecordController],
  providers: [RecordService]
})
export class RecordModule {}
