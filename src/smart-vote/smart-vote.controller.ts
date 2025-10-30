import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SmartVoteService } from './smart-vote.service';
import {
  AdminDto,
  CandidatesDto,
  VotersDto,
  VotesDto,
  CandidacyDto,
} from './dto/create-smart-vote.dto';

@Controller('smart-vote')
export class SmartVoteController {
  constructor(private readonly smartVoteService: SmartVoteService) {}

  // insert candidate
  @Post('candidates')
  createCandidate(@Body() smartVoteCandidate: CandidatesDto) {
    return this.smartVoteService.createCandidate(smartVoteCandidate);
  }

  // update candidate
  @Post('candidate-update')
  async updateCandidate(
    @Param('student_id') student_id: string,
    @Body() updateSmartVoteCandidate: CandidatesDto,
  ) {
    return this.smartVoteService.updateCandidate(
      student_id,
      updateSmartVoteCandidate,
    );
  }

  @Post('voters')
  createVoter(@Body() smartVoteVoter: VotersDto) {
    return this.smartVoteService.createVoter(smartVoteVoter);
  }

  @Post('admins')
  createAdmin(@Body() smartVoteAdmin: AdminDto) {
    return this.smartVoteService.createAdmin(smartVoteAdmin);
  }

  @Post('votes')
  createVotes(@Body() smartVoteVotes: VotesDto) {
    return this.smartVoteService.createVotes(smartVoteVotes);
  }

  @Get('get/candidates')
  async findAllCandidates() {
    try {
      return await this.smartVoteService.findAllCandidates();
    } catch (error) {
      // Return an error response if service fails
      throw new HttpException(
        error.message || 'Failed to retrieve candidates.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('update-candidacy')
  async update(
    @Param('id') id: number,
    @Body() smartVoteCandidacy: CandidacyDto,
  ) {
    return this.smartVoteService.updateCandidacy(id, smartVoteCandidacy);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.smartVoteService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.smartVoteService.remove(+id);
  // }
}
