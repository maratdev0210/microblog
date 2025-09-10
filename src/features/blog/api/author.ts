import type { User } from "../../../types/user";

export async function getAuthor(userId: number): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("User was not found");
  }

  const user = (await response.json()) as User[];
  return user;
}
