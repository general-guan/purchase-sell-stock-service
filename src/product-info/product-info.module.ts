import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInfoController } from './product-info.controller';
import { ProductInfoService } from './product-info.service';
import { ProductInfoEntity } from './product-info.entity';
import { ContainerInfoEntity } from '../container-info/container-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductInfoEntity, ContainerInfoEntity])],
  controllers: [ProductInfoController],
  providers: [ProductInfoService],
})
export class ProductInfoModule {}
