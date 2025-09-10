// Blog Post with title and the main content
export default function Post({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
}
