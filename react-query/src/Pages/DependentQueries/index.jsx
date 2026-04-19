import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import QUERY_ID from '../../main';

const fetchYoutube = async ({ queryKey }) => {
    const email = queryKey[1];
    return (await axios.get(`${import.meta.env.VITE_BASE_URL}youtube/${email}`)).data
}

const fetchCourses = async ({ queryKey }) => {
    const channel = queryKey[1];
    return (await axios.get(`${import.meta.env.VITE_BASE_URL}channels/${channel}`)).data
}

const DependentQueries = ({ email }) => {
    const { data: youtube} = useQuery({
        queryKey: [QUERY_ID.youtube, email],
        queryFn: fetchYoutube
    })

    const channel = youtube?.channel
    console.log(channel)
    const { data} = useQuery({
        queryKey: [QUERY_ID.channel, channel],
        queryFn: fetchCourses,
        enabled: !!channel,
    })

    console.log(data?.courses)
  return (
    <div>DependentQueries</div>
  )
}

export default DependentQueries