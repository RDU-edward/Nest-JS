import { Injectable } from '@nestjs/common';
import { CreateCrfDto, UpdateCrfDto } from './dto/create-crf.dto';
import { DatabaseService } from 'src/db/db.service';

@Injectable()
export class CrfService {
  constructor(private readonly database: DatabaseService) {}

  async create(createCrfDto: CreateCrfDto) {
    const result = await this.database.callStoredProcedure('insertCrf', [
      createCrfDto.requestor_name,
      createCrfDto.department,
      createCrfDto.change_description,
      createCrfDto.justification,
      createCrfDto.assets_systems,
      createCrfDto.not_implementing,
      createCrfDto.start_date,
      createCrfDto.end_date,
      createCrfDto.requestor_signature,
      createCrfDto.special_instructions,
      createCrfDto.classification,
      createCrfDto.priority,
    ]);

    return result[0];
  }

  async findAll() {
    const [result] = await this.database.callStoredProcedure('getAllCrf');
    console.log(result);

    return result;
  }

  async updateCrf(UpdateCrfDto: UpdateCrfDto) {
    try {
      const result = await this.database.callStoredProcedure('updateCrf', [
        UpdateCrfDto.crf_number,
        UpdateCrfDto.approver_id,
        UpdateCrfDto.approver_name,
      ]);

      return result;
    } catch (error) {
      console.error('Error updating CRF:', error);
      throw new Error('Failed to update CRF.');
    }
  }
}
