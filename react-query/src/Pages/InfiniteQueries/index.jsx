import React from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import QUERY_ID from "../../main";
import axios from "axios";

const fetchColors = async ({ pageParam = 1 }) => {
  return (
    await axios.get(
      `${import.meta.env.VITE_BASE_URL}colors?_per_page=2&_page=${pageParam}`,
    )
  ).data;
};

const InfiniteQueries = () => {
  const { isLoading, data, isError, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [QUERY_ID.colors],
    queryFn: fetchColors,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;
  console.log(data)
  return (
    <>
      <div>InfiniteQueries</div>
      {data?.pages?.map((group) => {
        return group.data.map(color => {
            return <div key={color.id}>{color.label}</div>;
        })
      })}

      <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
      <div>{ isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default InfiniteQueries;
