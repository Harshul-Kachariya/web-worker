import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [data, setData] = useState<Post[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>All posts</h1>
      {data?.length > 0 ? (
        data?.map((post: any) => (
          <div key={post.id}>
            <h2> {post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Posts;
