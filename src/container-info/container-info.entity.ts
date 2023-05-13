import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { WarehouseInfoEntity } from '../warehouse-info/warehouse-info.entity';

@Entity('container_info')
export class ContainerInfoEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column()
  productName: string;

  @Column()
  purchaseStaff: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  purchaseDate: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  storageDate: string;

  @Column()
  specifications: number;

  @ManyToOne(
    () => WarehouseInfoEntity,
    (warehouseInfo) => warehouseInfo.containerInfo,
  )
  warehouseInfo: WarehouseInfoEntity;
}
