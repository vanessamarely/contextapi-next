import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Initialvalue = {
  title: "",
};

type PostData = {
  title: string;
}

export default function Posts() {
  const router = useRouter();
  const [post, setPost] = useState<PostData>(Initialvalue);
  const [isLoading, setIsLoading] = useState(true);
  
  //common data fetching pattern on client side
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPost(data);
      });
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl mb-8">All Posts</h1>
      <p className="mb-4">
        This page contains the list of posts in this application
      </p>

      <div className="p-8">
        <h3>
          Dummy Post
        </h3>
        <p>{isLoading ? "Loading..." : ""}</p>
        <p>{post?.title}</p>
      </div>
      <ul className="list-none list-inside border border-teal-600 rounded p-1.5 m-1.5">
        <li className="mb-2">
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li className="mb-2">
          <Link href="/posts/2">Post 2</Link>
        </li>
        <li className="mb-2">
          <Link href="/posts/3">Post 3</Link>
        </li>
      </ul>
      <button
        className="rounded text-sm bg-teal-600 text-white p-1.5 m-1.5"
        onClick={() => router.push("posts/category?query=value2")}
      >
        Ir a Post de categoria
      </button>

      <button
        className="rounded text-sm bg-teal-600 text-white p-1.5 m-1.5"
        onClick={() => router.push("posts/comments")}
      >
        Ir a Comentarios
      </button>
    </div>
  );
}
