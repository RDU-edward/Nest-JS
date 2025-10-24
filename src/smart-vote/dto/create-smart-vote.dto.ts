export class CreateSmartVoteCandidatesDto {
  student_id: string;
  firstname: string;
  lastname: string;
  gender: string;
  course: string;
  year: string;
  email: string;
  position: string;
  election_type: string;
  party: string;
  status: string;
  filed_date: string;
}

export class CreateSmartVoteVotersDto {
  student_id: string;
  firstname: string;
  lastname: string;
  gender: string;
  department: string;
  email: string;
  registered_at: string;
}
export class CreateSmartVoteVotesDto {
  voters_id: string;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
  election_type: string;
  president: string;
  vice_president: string;
  voted_date: string;
}
export class CreateSmartVoteAdminsDto {
  admin_id: string;
  firstname: string;
  lastname: string;
  email: string;
  admin_dept: string;
}

export class UpdateSmartVoteCandidacy {
  id: number;
  candidacy_type: string;
  open_date: string;
  close_date: string;
  status: string;
  opened_by: string;
}

export class UpdateSmartVoteElection {
  id: number;
  election_type: string;
  open_date: string;
  close_date: string;
  status: string;
  opened_by: string;
}
