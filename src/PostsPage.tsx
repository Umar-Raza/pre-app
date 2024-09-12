import React, { useEffect, useState } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonResp = await resp.json();
    setPosts(jsonResp);
    console.log({ jsonResp });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      <h1 className="m-5">Posts</h1>
      <button onClick={getPosts}>Click me!</button>
      {posts.map((postItem) => {
        return (
          <div className="my-10">
            <h1 className="text-xl font-bold">{postItem.title}</h1>
            <p>{postItem.body}</p>
          </div>
        );
      })}
    </section>
  );
};
