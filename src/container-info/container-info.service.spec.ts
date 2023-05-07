import { Test, TestingModule } from '@nestjs/testing';
import { ContainerInfoService } from './container-info.service';

describe('ContainerInfoService', () => {
  let service: ContainerInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContainerInfoService],
    }).compile();

    service = module.get<ContainerInfoService>(ContainerInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
