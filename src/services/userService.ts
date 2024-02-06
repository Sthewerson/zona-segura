import axios from "axios";
import { CreateUserDto, User, UserAuth, UserLoginDto } from "../entity/User";

export class UserService {
  async register(data: CreateUserDto): Promise<Omit<User, "password">> {
    console.log(data);
    const response = await axios.post(
      "https://back-zonasegura.onrender.com/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    if (!response) {
      throw new Error("dados enviados incorretos");
    }
    if (response.status >= 400) {
      throw new Error(response.data);
    }
    const newUser = response.data;
    return new User(newUser);
  }

  async login(data: UserLoginDto): Promise<User | Error> {
    try {
      const response = await axios.post(
        "https://back-zonasegura.onrender.com/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const authUser = response.data;
      return authUser;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return e;
      }
      return new Error("erro ao logar");
    }
  }
}
