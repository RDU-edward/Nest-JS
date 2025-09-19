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

  //TEST DB

  //   BEGIN

  // DECLARE v_year CHAR(4);
  //     DECLARE v_max_seq INT;
  //     DECLARE v_new_seq INT;
  //     DECLARE v_crf_number VARCHAR(20);

  //     SET v_year = YEAR(CURDATE());

  //     -- Get max sequence number for current year, or 0 if none
  //     SELECT COALESCE(
  //         MAX(CAST(SUBSTRING_INDEX(crf_number, '-', -1) AS UNSIGNED)),
  //         0
  //     )
  //     INTO v_max_seq
  //     FROM tbl_crfRequest
  //     WHERE crf_number LIKE CONCAT('CRF-', v_year, '-%');
  //     SET v_new_seq = v_max_seq + 1;
  //     SET v_crf_number = CONCAT('CRF-', v_year, '-', LPAD(v_new_seq, 3, '0'));

  //   INSERT INTO tbl_crfRequest (
  //         crf_number,
  //         requestor_name,
  //         department,
  //         change_description,
  //         justification,
  //         assets_systems,
  //         not_implementing,
  //         start_date,
  //         end_date,
  //         requestor_signature,
  //         request_date,
  //         special_instructions,
  //         classification,
  //         priority,
  //         `status`,
  //         approver_id,
  //         approver_name,
  //         approved_date,
  //         rdt,
  //         udt,
  //         rs
  //     ) VALUES (
  //         v_crf_number,
  //         _requestor_name,
  //         _department,
  //         _change_description,
  //         _justification,
  //         _assets_systems,
  //         _not_implementing,
  //         _start_date,
  //         _end_date,
  //         _requestor_signature,
  //          NOW(),
  //         _special_instructions,
  //         _classification,
  //         _priority,
  //         "FOR DEPARTMENT HEAD APPROVAL",
  //         NULL,
  //         NULL,
  //         NULL,
  //         NOW(),
  //         NOW(),
  //         1
  //     );

  //     SELECT 1 AS retVal, "Successfully Inserted" AS rsmsg;
  // END
}
