import { useQuery, useMutation, QueryClient, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import QUERY_ID from "../main";

const fetchSuperheroes = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users`);
  return res.data;
};

const useSuperHeroesData = () => {
  return useQuery({
    queryKey: [QUERY_ID.superheroes],
    queryFn: fetchSuperheroes,
    // refetchOnMount: false,
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    //   select: (data) => {
    //     const superheroNames = data.map((hero) => hero.name);
    //     return superheroNames;
    //   },
  });
};

export default useSuperHeroesData;

const addSuperHero = async (hero) => {
  return (await axios.post(`${import.meta.env.VITE_BASE_URL}users`, hero)).data;
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSuperHero,
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries(QUERY_ID.superheroes)
    //   queryClient.setQueryData([QUERY_ID.superheroes], (oldQueryData) => {
    //     const newData =  [
    //       ...oldQueryData,
    //       {...data}
    //     ]
    //     return newData
    //   })
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries([QUERY_ID.superheroes]);
      const previousData = queryClient.getQueryData([QUERY_ID.superheroes])
      queryClient.setQueryData([QUERY_ID.superheroes], (oldQueryData) => {
        return [
          ...oldQueryData,
          {id: oldQueryData.length + 1, ...newHero}
        ]
      })
      return previousData
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData([QUERY_ID.superheroes], context.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries(QUERY_ID.superheroes)
    }
  });
};
