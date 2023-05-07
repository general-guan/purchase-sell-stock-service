import { Test, TestingModule } from '@nestjs/testing';
import { ContainerInfoController } from './container-info.controller';

describe('ContainerInfoController', () => {
  let controller: ContainerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContainerInfoController],
    }).compile();

    controller = module.get<ContainerInfoController>(ContainerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
