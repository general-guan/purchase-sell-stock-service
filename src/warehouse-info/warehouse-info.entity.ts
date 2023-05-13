import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ContainerInfoEntity } from '../container-info/container-info.entity';

@Entity('warehouse_info')
export class WarehouseInfoEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column()
  productName: string;

  @Column()
  inventoryNumber: number;

  @OneToMany(
    () => ContainerInfoEntity,
    (containerInfo) => containerInfo.warehouseInfo,
  )
  containerInfo: ContainerInfoEntity[];
}
