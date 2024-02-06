export type CreateUserDto = Omit<IUser, "id" | "created_at" | "updated_at">;

export type UserLoginDto = {
  cpf: string;
  password: string;
};

export type UserAuth = Omit<IUser, "password"> & {
  token: string;
};

export type IUser = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  birthday: Date;
  created_at: Date;
  updated_at: Date;
};

export class User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  birthday: Date;
  created_at: Date;
  updated_at: Date;
  constructor(data: Omit<IUser, "password">) {
    (this.id = data.id), (this.name = data.name), (this.cpf = data.cpf);
    (this.email = data.email),
      (this.birthday = data.birthday),
      (this.created_at = data.created_at),
      (this.updated_at = data.updated_at);
  }
}
