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
  CreateSmartVoteAdminsDto,
  CreateSmartVoteCandidatesDto,
  CreateSmartVoteVotersDto,
  CreateSmartVoteVotesDto,
  UpdateSmartVoteCandidacy,
} from './dto/create-smart-vote.dto';
// import { UpdateSmartVoteDto } from './dto/update-smart-vote.dto';

@Controller('smart-vote')
export class SmartVoteController {
  constructor(private readonly smartVoteService: SmartVoteService) {}

  @Post('candidates')
  createCandidate(@Body() createCandidateDto: CreateSmartVoteCandidatesDto) {
    return this.smartVoteService.createCandidate(createCandidateDto);
  }

  @Post('voters')
  createVoter(@Body() createVoterDto: CreateSmartVoteVotersDto) {
    return this.smartVoteService.createVoter(createVoterDto);
  }

  @Post('admins')
  createAdmin(@Body() createAdminDto: CreateSmartVoteAdminsDto) {
    return this.smartVoteService.createAdmin(createAdminDto);
  }

  @Post('votes')
  createVotes(@Body() createVotesDto: CreateSmartVoteVotesDto) {
    return this.smartVoteService.createVotes(createVotesDto);
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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.smartVoteService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSmartVoteDto: UpdateSmartVoteCandidacy,
  ) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new HttpException('Invalid ID format', HttpStatus.BAD_REQUEST);
    }
    return this.smartVoteService.update(parsedId, updateSmartVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smartVoteService.remove(+id);
  }
}
