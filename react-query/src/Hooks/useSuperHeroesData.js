import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import QUERY_ID from "../main";

const fetchSuperHeroData = async ({ queryKey }) => {
    const heroId = queryKey[1]
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users/${heroId}`);
  return res.data;
}

export const useSuperHero = (heroId) => {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: [QUERY_ID, heroId],
        queryFn: fetchSuperHeroData,
        initialData: () => {
            const hero = queryClient.getQueryData([QUERY_ID.superheroes])?.find(hero => parseInt(hero.id) === parseInt(heroId));
            console.log(queryClient.getQueryData([QUERY_ID.superheroes]))
            console.log({ hero })
            if(hero){
                return {
                    ...hero
               }
            }else{
                return undefined;
            }
        }
    })
}