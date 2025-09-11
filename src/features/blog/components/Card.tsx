// Blog Card, serves as the wrapper for other blog parts
import Author from "./Author";
import Post from "./Post";

export default function Card({
  title,
  content,
  userId,
}: {
  title: string;
  content: string;
  userId: number;
}) {
  return (
    <div className="w-1/3 m-auto border-1 p-4 rounded-xl shadow-md border-gray-100/50">
      <Author userId={userId} />
      <Post title={title} content={content} />
    </div>
  );
}
