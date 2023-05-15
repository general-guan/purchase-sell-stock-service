import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductInfoEntity } from './product-info.entity';
import { ContainerInfoEntity } from '../container-info/container-info.entity';

@Injectable()
export class ProductInfoService {
  constructor(
    @InjectRepository(ProductInfoEntity)
    private readonly productInfoRepository: Repository<ProductInfoEntity>,
    @InjectRepository(ContainerInfoEntity)
    private readonly containerInfoRepository: Repository<ContainerInfoEntity>,
  ) {}
  /**
   * 获取商品信息列表
   */
  async productInfoList(post) {
    let data;
    if (post.containerInfoID) {
      const { productInfo } = await this.containerInfoRepository.findOne({
        where: { id: post.containerInfoID },
        relations: ['productInfo'],
      });
      data = productInfo;
    } else {
      data = await this.productInfoRepository.find();
    }
    return { data };
  }

  /**
   * 新增商品信息
   */
  async productInfoAdd(post) {
    console.log(post);
    const containerInfo = await this.containerInfoRepository.findOne({
      where: { id: post.containerInfoID },
    });

    await this.productInfoRepository.save({
      productName: containerInfo.productName,
      containerInfo: containerInfo,
    });
    return {
      message: '新增商品信息成功！',
    };
  }

  /**
   * 删除商品信息
   */
  async productInfoDelete(post) {
    const productInfoRemove = await this.productInfoRepository.findOne({
      where: { id: post.id },
    });
    await this.productInfoRepository.remove(productInfoRemove);
    return {
      message: '删除商品信息成功！',
    };
  }
}
