export type Session = { email: string; provider: 'zoho'; signedInAt: string };

export type Profile = {
  fullName: string;
  dateOfBirth: string;
  sex: 'female' | 'male' | 'other' | 'prefer-not' | '';
  phone: string;
  heightCm: string;
  weightKg: string;
  conditions: string[];
};

export type IntakeStatus =
  'not-started' | 'in-progress' | 'skipped' | 'qualified' | 'not-fit' | 'urgent';

export type IntakeState = {
  status: IntakeStatus;
  /** Question id to selected option ids */
  answers: Record<string, string[]>;
  step: number;
  attempts: number;
  completedAt?: string;
};

export type AccountState = {
  session: Session | null;
  profile: Profile | null;
  intake: IntakeState;
};
