export type User = {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  dob: string;
};

export type dataAuth = {
  cpf: string;
  password: string;
};

export type userAuth = {
  token: string;
  id: string;
  name: string;
  cpf: string;
  email: string;
  dob: Date;
  occurrence: Occurrence[];
  created_at: Date;
  updated_at: Date;
};

export type Occurrence = {
  date: Date;
  genrer: string;
  local: string;
  subject: string;
  userId: string;
};
