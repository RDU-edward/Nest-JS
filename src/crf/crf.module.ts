import { Module } from '@nestjs/common';
import { CrfService } from './crf.service';
import { CrfController } from './crf.controller';
import { DatabaseService } from 'src/db/db.service';

@Module({
  controllers: [CrfController],
  providers: [CrfService, DatabaseService],
})
export class CrfModule {}
