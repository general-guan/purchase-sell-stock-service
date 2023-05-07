import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('container_info')
export class ContainerInfoEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column()
  productName: string;

  @Column()
  purchaseStaff: string;

  @Column({ type: 'bigint' })
  purchaseDate: number;

  @Column({ type: 'bigint' })
  storageDate: number;

  @Column()
  specifications: number;
}
