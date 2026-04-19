import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHero } from '../../Hooks/useSuperHeroesData';

const RQSUperHeroesDetail = () => {
    const { id } = useParams();
    const { loading, error, data, isError} = useSuperHero(id);
    if(loading) return <div>Loading...</div>
    if(isError) return <div>{error}</div>
  return (
    <>
    <div>RQSUperHeroesDetail</div>
    <div>{data?.name} - {data?.last_name}</div>
    </>
  )
}

export default RQSUperHeroesDetail