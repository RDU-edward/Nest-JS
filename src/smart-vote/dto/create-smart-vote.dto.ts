export class CandidatesDto {
  student_id: string;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
  position: string;
  party: string;
  about_yourself: string;
  purpose: string;
  election_type: string;
  status: string;
  remarks: string;
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
  student_id: string;
  voters_id: string;
  fullname: string;
  email: string;
  department: string;
  election_type: string;
  president: string;
  vice_president: string;
  secretary: string;
  voted_date: string;
}
export class AdminDto {
  admin_id: string;
  password: string;
  fullname: string;
  email: string;
  departments: string[];
  position: string;
  added_by: string;
}

export class CandidacyDto {
  candidacy_type: string;
  close_date: string;
  status: string;
  opened_by: string;
}

export class ElectionDto {
  election_type: string;
  close_date: string;
  status: string;
  opened_by: string;
}
