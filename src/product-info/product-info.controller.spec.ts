import { Test, TestingModule } from '@nestjs/testing';
import { ProductInfoController } from './product-info.controller';

describe('ProductInfoController', () => {
  let controller: ProductInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInfoController],
    }).compile();

    controller = module.get<ProductInfoController>(ProductInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
