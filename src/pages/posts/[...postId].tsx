import NewsletterRegistration from "@/components/NewsletterRegistration";
import { useRouter } from "next/router";

export default function Post() {
  const {
    query: { postId },
  } = useRouter();
  const router = useRouter();

  return (
    <div>
      <div className="mb-6">
        <h1>Single post page</h1>
        <h3 className="text-xl mb-2">This is pos {postId}</h3>
        <button
          className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5"
          onClick={() => router.push("/posts")}
        >
          Volver
        </button>
      </div>
      <NewsletterRegistration />
    </div>
  );
}
