import { Module } from '@nestjs/common';
import { WarehouseInfoModule } from '../warehouse-info/warehouse-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerInfoController } from './container-info.controller';
import { ContainerInfoService } from './container-info.service';
import { ContainerInfoEntity } from './container-info.entity';
import { WarehouseInfoEntity } from '../warehouse-info/warehouse-info.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContainerInfoEntity, WarehouseInfoEntity]),
    WarehouseInfoModule,
  ],
  controllers: [ContainerInfoController],
  providers: [ContainerInfoService],
})
export class ContainerInfoModule {}
