import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateSmartVoteAdminsDto,
  CreateSmartVoteCandidatesDto,
  CreateSmartVoteVotersDto,
  CreateSmartVoteVotesDto,
  UpdateSmartVoteCandidacy,
  UpdateSmartVoteElection,
} from './dto/create-smart-vote.dto';
import { DatabaseService } from 'src/db/db.service';
// import { UpdateSmartVoteDto } from './dto/update-smart-vote.dto';

@Injectable()
export class SmartVoteService {
  constructor(private readonly database: DatabaseService) {}

  //Insert Candidates
  async createCandidate(createSmartVoteDto: CreateSmartVoteCandidatesDto) {
    try {
      const result = await this.database.callStoredProcedure(
        'insertCandidate',
        [
          createSmartVoteDto.student_id,
          createSmartVoteDto.firstname,
          createSmartVoteDto.lastname,
          createSmartVoteDto.gender,
          createSmartVoteDto.course,
          createSmartVoteDto.year,
          createSmartVoteDto.email,
          createSmartVoteDto.position,
          createSmartVoteDto.election_type,
          createSmartVoteDto.party,
          createSmartVoteDto.status,
          createSmartVoteDto.filed_date,
        ],
      );

      return {
        success: true,
        message: 'Added Successfully',
        data: result,
      };
    } catch (error) {
      // Optionally log the error to a logging service
      console.error('Error inserting candidate:', error);

      throw new HttpException(
        'Failed to add candidate. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //Insert Voters
  async createVoter(createSmartVoteDto: CreateSmartVoteVotersDto) {
    try {
      const result = await this.database.callStoredProcedure('insertVoters', [
        createSmartVoteDto.student_id,
        createSmartVoteDto.firstname,
        createSmartVoteDto.lastname,
        createSmartVoteDto.gender,
        createSmartVoteDto.department,
        createSmartVoteDto.registered_at,
      ]);
      return {
        success: true,
        message: 'Voter Added Successfully',
        data: result,
      };
    } catch (error) {
      // Optionally log the error to a logging service
      console.error('Error inserting Voter:', error);

      throw new HttpException(
        'Failed to add voter. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //Insert Admins
  async createAdmin(createSmartVoteDto: CreateSmartVoteAdminsDto) {
    try {
      const result = await this.database.callStoredProcedure('insertAdmins', [
        createSmartVoteDto.admin_id,
        createSmartVoteDto.firstname,
        createSmartVoteDto.lastname,
        createSmartVoteDto.email,
        createSmartVoteDto.admin_dept,
      ]);
      return {
        success: true,
        message: 'Admin added Successfully',
        data: result,
      };
    } catch (error) {
      // Optionally log the error to a logging service
      console.error('Error inserting Admin:', error);

      throw new HttpException(
        'Failed to add admin. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //Insert Votes

  async createVotes(createSmartVoteDto: CreateSmartVoteVotesDto) {
    try {
      const result = await this.database.callStoredProcedure('insertVotes', [
        createSmartVoteDto.voters_id,
        createSmartVoteDto.firstname,
        createSmartVoteDto.lastname,
        createSmartVoteDto.email,
        createSmartVoteDto.department,
        createSmartVoteDto.election_type,
        createSmartVoteDto.president,
        createSmartVoteDto.vice_president,
        createSmartVoteDto.voters_id,
      ]);

      return {
        success: true,
        message: 'Votes Inserted Successfully.',
        data: result,
      };
    } catch (error) {
      // Optionally log the error to a logging service
      console.error('Error inserting Votes:', error);

      throw new HttpException(
        'Failed to add votes. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //Getting all Candidates
  async findAllCandidates() {
    try {
      // Call the stored procedure to get all candidates
      const [result] =
        await this.database.callStoredProcedure('getAllCandidates');

      if (!result || result.length === 0) {
        throw new Error('No candidates found');
      }

      return {
        success: true,
        message: 'Candidates retrieved successfully',
        data: result,
      };
    } catch (error) {
      console.error('Error retrieving candidates:', error);
      throw new Error('Failed to retrieve candidates. Please try again later.');
    }
  }

  //Update Candidacy Schedule
  async updateCandidacy(
    id: number,
    updateSmartVoteDto: UpdateSmartVoteCandidacy,
  ) {
    try {
      const result = await this.database.callStoredProcedure(
        'updateCandidacy',
        [
          updateSmartVoteDto.id,
          updateSmartVoteDto.candidacy_type,
          updateSmartVoteDto.open_date,
          updateSmartVoteDto.close_date,
          updateSmartVoteDto.status,
          updateSmartVoteDto.opened_by,
        ],
      );

      // Check if the result is null or undefined (no rows affected)
      if (!result) {
        throw new HttpException(
          'Candidacy Schedule update failed, no data found',
          HttpStatus.NOT_FOUND,
        );
      }

      return {
        success: true,
        message: 'Candidacy schedule updated successfully.',
        data: result, // You can return the result or just the ID depending on what your stored procedure returns
      };
    } catch (error) {
      // Log the error with more context for debugging
      console.error('Error updating candidacy schedule:', error);

      throw new HttpException(
        'Failed to update candidacy schedule. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //Update Election Schedule

  async updateElection(
    id: number,
    updateSmartVoteDto: UpdateSmartVoteElection,
  ) {
    try {
      const result = await this.database.callStoredProcedure('updateElection', [
        updateSmartVoteDto.id,
        updateSmartVoteDto.election_type,
        updateSmartVoteDto.open_date,
        updateSmartVoteDto.close_date,
        updateSmartVoteDto.status,
        updateSmartVoteDto.opened_by,
      ]);

      // Check if the result is null or undefined (no rows affected)
      if (!result) {
        throw new HttpException(
          'Election schedule update failed, no data found',
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        success: true,
        message: 'Election schedule updated successfully.',
        data: result,
      };
    } catch (error) {
      // Log the error with more context for debugging
      console.error('Error updating election schedule:', error);

      throw new HttpException(
        'Failed to update election schedule',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} smartVote`;
  }

  remove(id: number) {
    return `This action removes a #${id} smartVote`;
  }
}
