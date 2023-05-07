import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContainerInfoEntity } from './container-info.entity';

@Injectable()
export class ContainerInfoService {
  constructor(
    @InjectRepository(ContainerInfoEntity)
    private readonly containerInfoRepository: Repository<ContainerInfoEntity>,
  ) {}

  /**
   * 获取进货箱信息
   */
  async containerInfoList(): Promise<{
    code: number;
    data: any;
    message: string;
  }> {
    const data = await this.containerInfoRepository
      .createQueryBuilder('container-info')
      .getMany();

    return {
      code: 200,
      data,
      message: null,
    };
  }

  /**
   * 新增进货箱信息
   */
  async containerInfoAdd(
    post,
  ): Promise<{ code: number; data: any; message: string }> {
    await this.containerInfoRepository.save(post);
    return {
      code: 200,
      data: null,
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
      code: 200,
      data: null,
      message: '删除进货箱信息成功！',
    };
  }
}