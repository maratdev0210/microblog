import type { Blog } from "../../../types/blog";

export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Error fetching blogs");
  }

  const blogs = (await response.json()) as Blog[];

  return blogs;
}
