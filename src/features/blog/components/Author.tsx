// Name of the Author
import type { User } from "../../../types/user";
import { getAuthor } from "../api/author";
import { useState, useEffect } from "react";

export default function Author({ userId }: { userId: number }) {
  const [author, setAuthor] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAuthor(userId)
      .then((response) => {
        const Author: User = {
          id: userId,
          name: response[userId].name,
          email: response[userId].email,
        };

        setAuthor(Author);
      })
      .catch((err: unknown) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <p>name: {author?.name}</p>
      <p>email: {author?.email}</p>
    </>
  );
}
