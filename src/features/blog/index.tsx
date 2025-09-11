import { getBlogs } from "./api/blog";
import { useEffect, useState } from "react";
import type { Blog } from "../../types/blog";
import Card from "./components/Card";

export default function Blog() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs()
      .then((response) => {
        console.log(response);
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
    <div>
      {loading && <div>this is currently loading</div>}
      <div>this is a blog page</div>
      {blogs.slice(0, 1).map((blog) => {
        return (
          <Card 
            key={blog.id}
            userId={blog.userId}
            title={blog.title}
            content={blog.body}
            
          />
        );
      })}
    </div>
  );
}
