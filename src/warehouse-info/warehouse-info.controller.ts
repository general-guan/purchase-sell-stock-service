import { Controller, Post } from '@nestjs/common';
import { WarehouseInfoService } from './warehouse-info.service';

@Controller('warehouse-info')
export class WarehouseInfoController {
  constructor(private readonly warehouseInfoService: WarehouseInfoService) {}

  @Post('list')
  warehouseInfoList() {
    return this.warehouseInfoService.warehouseInfoList();
  }
}
