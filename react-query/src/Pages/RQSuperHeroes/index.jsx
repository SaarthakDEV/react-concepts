import React, { useEffect, useState } from "react";
import useSuperHeroesData, { useAddSuperHeroData } from "../../Hooks/useSuperHeoresData";
import { Link } from "react-router-dom";

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [ego, setEgo] = useState("");

  const { isLoading, data, isError, error, isFetching, refetch, isSuccess } =
    useSuperHeroesData();

  //   console.log(isLoading, isFetching)

  const { mutate, isLoading: postIsLoading, error: postError, isError: postIsError } = useAddSuperHeroData()


  const handleAddHeroClick = () => {
    const hero = { name, last_name: ego }
    mutate(hero)
  }

  useEffect(() => {
    if (isSuccess) {
      console.log("Performing sideeffects after query success");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log("Performing sideeffects after query error");
    }
  }, [isError]);

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (isError) return <h2>{error?.message}</h2>;
  return (
    <div>
      <h2>RQSuperheroes</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={ego} onChange={(e) => setEgo(e.target.value)} />
      <button onClick={handleAddHeroClick}>Add hero</button>
      <br />
      {data?.map((hero) => {
        return (
          <React.Fragment key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            <br />
          </React.Fragment>
        );
      })}
      <button onClick={refetch}>fetch</button>
    </div>
  );
};

export default RQSuperHeroes;
