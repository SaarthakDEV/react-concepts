import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Superheroes from "./Pages/Superheroes";
import RQSuperHeroes from "./Pages/RQSuperHeroes";
import Navbar from "./Components/Navbar";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import RQSUperHeroesDetail from "./Pages/RQSuperHeoresDetail";
import ParallelQueries from "./Pages/ParallelQueries";
import DynamicParallelQueries from "./Pages/DynamicParallelQueries";
import DependentQueries from "./Pages/DependentQueries";
import Pagination from "./Pages/Pagination";
import InfiniteQueries from "./Pages/InfiniteQueries";

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/super-heroes" element={<Superheroes />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
          <Route path="/rq-super-heroes/:id" element={<RQSUperHeroesDetail />} />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
          <Route path="/rq-dynamic-parallel" element={<DynamicParallelQueries heroIds={[2, 3]} />} />
          <Route path="/rq-dependent" element={<DependentQueries email={"amatevushev0@mozilla.org"} />} />
          <Route path="/rq-paginated" element={<Pagination />} />
          <Route path="/rq-infinite" element={<InfiniteQueries />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
