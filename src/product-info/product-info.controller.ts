import { Controller, Post, Body } from '@nestjs/common';
import { ProductInfoService } from './product-info.service';

@Controller('product-info')
export class ProductInfoController {
  constructor(private readonly productInfoService: ProductInfoService) {}

  @Post('list')
  productInfoList(@Body() post) {
    return this.productInfoService.productInfoList(post);
  }

  @Post('add')
  productInfoAdd(@Body() post) {
    return this.productInfoService.productInfoAdd(post);
  }

  @Post('delete')
  productInfoDelete(@Body() post) {
    return this.productInfoService.productInfoDelete(post);
  }
}
