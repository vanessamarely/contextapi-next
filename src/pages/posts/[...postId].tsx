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
        <h1 className="text-3xl mb-8">Post Page</h1>
        <h3 className="text-xl mb-2">The post selected is {postId}</h3>
        <button
          className="rounded text-sm bg-teal-600 text-white p-1.5 m-1.5"
          onClick={() => router.push("/posts")}
        >
          Back to posts
        </button>
      </div>
      <NewsletterRegistration />
    </div>
  );
}
