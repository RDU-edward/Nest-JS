import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.crfService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCrfDto: UpdateCrfDto) {
  //   return this.crfService.update(+id, updateCrfDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.crfService.remove(+id);
  // }
}
