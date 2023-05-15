import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ContainerInfoEntity } from '../container-info/container-info.entity';

@Entity('product_info')
export class ProductInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column({ nullable: true })
  productSpecifications: string;

  @Column({ nullable: true })
  productModel: string;

  @Column({ nullable: true })
  productBrand: string;

  @Column({ nullable: true })
  productManufacturer: string;

  @Column({ nullable: true })
  productMeteringUnit: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productRetailPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productSalePriceOnce: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productSalePriceSecond: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productSalePriceThird: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productPurchasingPrice: number;

  @Column({ nullable: true })
  productRemark: string;

  @ManyToOne(
    () => ContainerInfoEntity,
    (containerInfo) => containerInfo.productInfo,
  )
  containerInfo: ContainerInfoEntity;
}
