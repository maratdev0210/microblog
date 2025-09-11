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
    <div className="*:block *:cursor-pointer">
      <span className=" text-black font-bold m-0 p-0">{author?.name}</span>
      <span className="text-gray-500 text-sm relative bottom-1.5">
        {author?.email.toLocaleLowerCase()}
      </span>
    </div>
  );
}
