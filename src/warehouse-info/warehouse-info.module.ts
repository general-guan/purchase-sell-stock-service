import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseInfoController } from './warehouse-info.controller';
import { WarehouseInfoService } from './warehouse-info.service';
import { WarehouseInfoEntity } from './warehouse-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseInfoEntity])],
  controllers: [WarehouseInfoController],
  providers: [WarehouseInfoService],
  exports: [WarehouseInfoService],
})
export class WarehouseInfoModule {}
