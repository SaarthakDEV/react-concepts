import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import QUERY_ID from "../../main";

const fetchFriends = async () => {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}friends`);
  return data.data;
};

const fetchSuperheroes = async () => {
  const data = await axios.get(`${import.meta.env.VITE_BASE_URL}users`);
  return data.data;
};

const ParallelQueries = () => {
    const {data: superheroes} = useQuery({
        queryKey: [QUERY_ID.superheroes],
        queryFn: fetchSuperheroes
    })
    const { data: friends } = useQuery({
        queryKey: [QUERY_ID.friends],
        queryFn: fetchFriends
    })

    console.log(superheroes, friends)
  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
