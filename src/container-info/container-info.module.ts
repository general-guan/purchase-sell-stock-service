import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerInfoController } from './container-info.controller';
import { ContainerInfoService } from './container-info.service';
import { ContainerInfoEntity } from './container-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContainerInfoEntity])],
  controllers: [ContainerInfoController],
  providers: [ContainerInfoService],
})
export class ContainerInfoModule {}
