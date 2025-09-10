// Blog Card, serves as the wrapper for other blog parts
import Author from "./Author";
import Post from "./Post";

export default function Card({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <Author userId={1} />
      <Post title={title} content={content} />
    </div>
  );
}
