import { Controller, Post, Body } from '@nestjs/common';
import { ContainerInfoService } from './container-info.service';

@Controller('container-info')
export class ContainerInfoController {
  constructor(private readonly containerInfoService: ContainerInfoService) {}

  @Post('list')
  containerInfoList(@Body() post) {
    return this.containerInfoService.containerInfoList(post);
  }

  @Post('add')
  containerInfoAdd(@Body() post) {
    return this.containerInfoService.containerInfoAdd(post);
  }

  @Post('delete')
  containerInfoDelete(@Body() post) {
    return this.containerInfoService.containerInfoDelete(post);
  }
}
