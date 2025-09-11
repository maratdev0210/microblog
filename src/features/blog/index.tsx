import { getBlogs } from "./api/blog";
import { useEffect, useState, useContext } from "react";
import { PageContext } from "../../context/blog/PageContext";
import type { Blog } from "../../types/blog";
import Card from "./components/Card";

export default function Blog() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const page = useContext(PageContext);

  useEffect(() => {
    getBlogs()
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
    <div>
      {loading && <div>this is currently loading</div>}
      <div>this is a blog page</div>
      {/* show the next 10 blogs on a current page */}
      {blogs.slice(page * 10, (page + 1) * 10).map((blog) => {
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
