import { BASE_URL } from "./occurrence.service";
import { User, dataAuth, userAuth } from "./types";

export async function createAccount(data: User) {
  const response = await fetch(`${BASE_URL}/register`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export async function loginUser(data: dataAuth): Promise<userAuth> {
  const response = await fetch(`${BASE_URL}/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}
