import React, { useEffect } from "react";
import useSWR, { Fetcher } from "swr";

type DataPrefecth = {
  title: string;
  body: string;
};

type Props = {
  dataPrefetch: DataPrefecth;
};

const fetcher: Fetcher<DataPrefecth, string> = (url) =>
  fetch(url).then((res) => res.json());

export default function DummyPage({ dataPrefetch }: Props) {
  //data client side fetching pattern with swr
  const { data, error } = useSWR("https://dummyjson.com/posts/1", fetcher);
  console.log(data);

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div>
        <h3 className="text-3xl mb-8">{data.title}</h3>
        <p className="mb-4">{data.body}</p>
      </div>
      <div>
        <h3 className="text-3xl mb-8">{dataPrefetch.title}</h3>
        <p className="mb-4">{dataPrefetch.body}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts/1");
  const dataPrefetch = await res.json();

  return {
    props: {
      dataPrefetch,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // every 10 seconds the page will be revalidated
  };
}
