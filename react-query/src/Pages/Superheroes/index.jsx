import { useEffect, useState } from "react";
import axios from "axios";

const Superheroes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}users`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err?.message);
      })
      .finally(setLoading(false));
  }, []);

  if (loading) return <div>Loading....</div>;
  if (error) return <h2>{error}</h2>
  return (
    <div>
      <h2>Superheroes</h2>
      {data?.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};

export default Superheroes;
