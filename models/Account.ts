export interface WritableAccountField {
  name?: string;
  email: string;
  password: string;
}

export interface Account extends WritableAccountField {
  id: string;
}
