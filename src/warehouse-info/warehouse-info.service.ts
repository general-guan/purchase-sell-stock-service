import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WarehouseInfoEntity } from './warehouse-info.entity';

@Injectable()
export class WarehouseInfoService {
  constructor(
    @InjectRepository(WarehouseInfoEntity)
    private readonly warehouseInfoRepository: Repository<WarehouseInfoEntity>,
  ) {}

  /**
   * 获取仓库信息列表
   */
  async warehouseInfoList() {
    const data = await this.warehouseInfoRepository
      .createQueryBuilder('warehouse-info')
      .getMany();

    return { data };
  }

  /**
   * 入库
   * @param productName 产品名称
   * @param num 入库数量
   */
  async warehouseInfoIn(productName, num) {
    const warehouseInfoUpdate = await this.warehouseInfoRepository.findOne({
      where: { productName: productName },
    });
    if (warehouseInfoUpdate) {
      warehouseInfoUpdate.inventoryNumber += num;
      return await this.warehouseInfoRepository.save(warehouseInfoUpdate);
    } else {
      return await this.warehouseInfoRepository.save({
        productName: productName,
        inventoryNumber: num,
      });
    }
  }

  /**
   * 出库
   * @param productName 产品名称
   * @param num 出库数量
   */
  async warehouseInfoOut(id, num) {
    const warehouseInfoUpdate = await this.warehouseInfoRepository.findOne({
      where: { id: id },
    });
    console.log(warehouseInfoUpdate);

    if (warehouseInfoUpdate) {
      warehouseInfoUpdate.inventoryNumber -= num;
      if (warehouseInfoUpdate.inventoryNumber === 0) {
        console.log(warehouseInfoUpdate);

        this.warehouseInfoRepository.remove(warehouseInfoUpdate);
      }
      await this.warehouseInfoRepository.save(warehouseInfoUpdate);
    }
  }
}
