import { useQueries } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import QUERY_ID from '../../main';

const fetchSuperHero = async ({ queryKey }) => {
    const heroId = queryKey[1];
    return (await axios.get(`${import.meta.env.VITE_BASE_URL}users/${heroId}`)).data;
}

const DynamicParallelQueries = ({ heroIds }) => {
    console.log(heroIds)
    const queryResults = useQueries({
        queries: heroIds?.map(heroId => ({
        queryKey: [QUERY_ID, heroId],
        queryFn: fetchSuperHero
    }))})

    console.log(queryResults[0].data)
  return (
    <div>DynamicParallelQueries</div>
  )
}

export default DynamicParallelQueries