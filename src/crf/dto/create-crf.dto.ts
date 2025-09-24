export class CreateCrfDto {
  requestor_name: string;
  department: string;
  change_description: string;
  justification: string;
  assets_systems: string;
  not_implementing: string;
  start_date: string;
  end_date: string;
  requestor_signature: string;
  special_instructions: string;
  classification: string;
  priority: string;
}

export class UpdateCrfDto {
  crf_number?: string;
  approver_id?: string;
  approver_name?: string;
}
