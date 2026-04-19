import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import QUERY_ID from '../../main'

const fetchColors = async ({ queryKey }) => {
    const page = queryKey[1];
    return (await axios.get(`${import.meta.env.VITE_BASE_URL}colors?_page=${page}&_per_page=2`)).data
}

const Pagination = () => {
    const [page, setPage] = useState(1);
    const {isLoading, data, isError, error} = useQuery({
        queryKey: [QUERY_ID.colors, page],
        queryFn: fetchColors,
        placeholderData: keepPreviousData
    })

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error}</div>
  return (
    <div>
        <h2>Pagination</h2>
        {
            data.data.map(color => {
                return <div key={color.id}>{color.label}</div>
            })
        }

        <button onClick={() => setPage(prev => prev - 1)} disabled={!(!!data.prev)}>Previous</button>
        <div>{page}</div>
        <button onClick={() => setPage(prev => prev + 1)} disabled={!(!!data.next)}>Next</button>
    </div>
  )
}

export default Pagination 