import { useRouter } from "next/router";
import { getComments } from "../../../lib/comments";

type Comment = {
  id: string;
  description: string;
};

type CommentsProps = { comments: Comment[] };

const Comments = ({ comments }: CommentsProps) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl mb-2">Comments</h1>

      <ul className="mt-6">
        {comments.map(({ description, id }: Comment) => (
          <li
            key={id}
            className="bg-teal-500 cursor-pointer hover:bg-teal-700 p-8 text-slate-200 mt-4 rounded"
            onClick={() => router.push(`${router.route}/${id}`)}
          >
            {description}
          </li>
        ))}
      </ul>
      <button
        className="rounded text-sm bg-teal-600 text-white p-1.5 mt-4"
        onClick={() => router.push("posts")}
      >
        Back to Post
      </button>
    </div>
  );
};

export default Comments;

export async function getServerSideProps() {
  const comments = await getComments();
  return {
    props: {
      comments,
    },
  };
}
