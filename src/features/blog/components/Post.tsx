// Blog Post with title and the main content
export default function Post({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className=" text-left w-[90%]">
      <h2 className="text-black">{title}</h2>
      <p className="text-gray-700 pt-1">{content}</p>
    </div>
  );
}
