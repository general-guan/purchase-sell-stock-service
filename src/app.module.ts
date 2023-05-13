import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerInfoModule } from './container-info/container-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseInfoModule } from './warehouse-info/warehouse-info.module';
import { ProductInfoModule } from './product-info/product-info.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'purchase-sell-stock',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContainerInfoModule,
    WarehouseInfoModule,
    ProductInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
