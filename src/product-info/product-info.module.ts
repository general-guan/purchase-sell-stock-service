import { Module } from '@nestjs/common';
import { ProductInfoController } from './product-info.controller';
import { ProductInfoService } from './product-info.service';

@Module({
  controllers: [ProductInfoController],
  providers: [ProductInfoService]
})
export class ProductInfoModule {}
