import { Controller, Get, Post, Body } from '@nestjs/common';
import { CrfService } from './crf.service';
import { CreateCrfDto, UpdateCrfDto } from './dto/create-crf.dto';

@Controller('crf')
export class CrfController {
  constructor(private readonly crfService: CrfService) {}

  @Post('insert-crf')
  create(@Body() createCrfDto: CreateCrfDto) {
    return this.crfService.create(createCrfDto);
  }

  @Get('all-crf')
  findAll() {
    return this.crfService.findAll();
  }

  @Post('update-crf')
  updateCrf(@Body() UpdateCrfDto: UpdateCrfDto) {
    return this.crfService.updateCrf(UpdateCrfDto);
  }
}
