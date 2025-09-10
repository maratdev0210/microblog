import { getBlogs } from "./api/blog";
import { useEffect, useState } from "react";
import type { Blog } from "../../types/blog";
import Card from "./components/Card";

export default function Blog() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs(1)
      .then((response) => {
        setBlogs(response);
      })
      .catch((err: unknown) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <div>this is currently loading</div>}
      <div>this is a blog page</div>
      {blogs.map((blog) => {
        return <Card key={blog.id} title={blog.title} content={blog.body} />;
      })}
    </>
  );
}
