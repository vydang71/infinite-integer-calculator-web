export interface WritableCalculationField {
  creatorId?: string;
  question: string;
}

export interface Calculation extends WritableCalculationField {
  id: string;
  answer: string;
  createdAt: string;
}