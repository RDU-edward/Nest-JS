export class CandidatesDto {
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

export class VotersDto {
  student_id: string;
  firstname: string;
  lastname: string;
  department: string;
  email: string;
  password: string;
}
export class VotesDto {
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
export class AdminDto {
  admin_id: string;
  firstname: string;
  lastname: string;
  email: string;
  admin_dept: string;
}

export class CandidacyDto {
  id: number;
  candidacy_type: string;
  open_date: string;
  close_date: string;
  status: string;
  opened_by: string;
}

export class ElectionDto {
  id: number;
  election_type: string;
  open_date: string;
  close_date: string;
  status: string;
  opened_by: string;
}
