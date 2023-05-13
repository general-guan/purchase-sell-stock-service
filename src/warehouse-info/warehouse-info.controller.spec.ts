import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseInfoController } from './warehouse-info.controller';

describe('WarehouseInfoController', () => {
  let controller: WarehouseInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseInfoController],
    }).compile();

    controller = module.get<WarehouseInfoController>(WarehouseInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
