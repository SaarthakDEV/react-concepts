import React from "react";
import { useQuery } from "@tanstack/react-query";
import QUERY_ID from "../../main";
import axios from "axios";

const fetchSuperheroes = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users`);
      return res.data
    }

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: [QUERY_ID.superheroes],
    queryFn: fetchSuperheroes,
    gcTime: 5000,
  });

  console.log(isLoading, isFetching)

  if (isLoading) return <div>Loading...</div>;
  if(isError) return <h2>{error?.message}</h2>
  return (
    <div>
      <h2>RQSuperheroes</h2>
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};

export default RQSuperHeroes;
