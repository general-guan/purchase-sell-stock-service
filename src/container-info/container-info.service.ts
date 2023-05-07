import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContainerInfoEntity } from './container-info.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class ContainerInfoService {
  constructor(
    @InjectRepository(ContainerInfoEntity)
    private readonly containerInfoRepository: Repository<ContainerInfoEntity>,
  ) {}

  /**
   * 获取进货箱信息
   */
  async containerInfoList() {
    const tempData = await this.containerInfoRepository
      .createQueryBuilder('container-info')
      .getMany();

    const data = tempData.map((m) => {
      m.purchaseDate = dayjs(m.purchaseDate).format('YYYY-MM-DD HH:mm:ss');
      m.storageDate = dayjs(m.storageDate).format('YYYY-MM-DD HH:mm:ss');
      return { ...m };
    });

    return {
      data,
    };
  }

  /**
   * 新增进货箱信息
   */
  async containerInfoAdd(post) {
    post.purchaseDate = new Date(post.purchaseDate);
    post.storageDate = new Date(post.storageDate);
    await this.containerInfoRepository.save(post);
    return {
      message: '新增进货箱信息成功！',
    };
  }

  /**
   * 新增进货箱信息
   */
  async containerInfoDelete(post) {
    const containerInfoRemove = await this.containerInfoRepository.findOne({
      where: {
        id: post.id,
      },
    });
    await this.containerInfoRepository.remove(containerInfoRemove);
    return {
      message: '删除进货箱信息成功！',
    };
  }
}
