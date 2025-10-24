import { Module } from '@nestjs/common';
import { SmartVoteService } from './smart-vote.service';
import { SmartVoteController } from './smart-vote.controller';
import { DatabaseService } from 'src/db/db.service';

@Module({
  controllers: [SmartVoteController],
  providers: [SmartVoteService, DatabaseService],
})
export class SmartVoteModule {}
