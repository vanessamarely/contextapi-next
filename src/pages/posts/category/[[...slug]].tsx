import { useRouter } from "next/router";

export default function CategoryPost() {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>post category</div>
  )
}