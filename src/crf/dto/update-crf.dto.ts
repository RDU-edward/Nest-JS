import { PartialType } from '@nestjs/mapped-types';
import { CreateCrfDto } from './create-crf.dto';

export class UpdateCrfDto extends PartialType(CreateCrfDto) {}
