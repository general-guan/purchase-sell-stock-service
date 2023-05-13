import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseInfoService } from './warehouse-info.service';

describe('WarehouseInfoService', () => {
  let service: WarehouseInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseInfoService],
    }).compile();

    service = module.get<WarehouseInfoService>(WarehouseInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
