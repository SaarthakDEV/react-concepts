import Fallback from "./Fallback";
import Hero from "./Hero";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    // <>
    //   <Hero name={"Batman"} />
    //   <Hero name={"Superman"} />
    //   <Hero name={"Joker"} />
    // </>


    // <ErrorBoundary fallback={<Fallback />}>
    //   <Hero name={"Batman"} />
    //   <Hero name={"Superman"} />
    //   <Hero name={"Joker"} />
    // </ErrorBoundary>

    
    <>
      <ErrorBoundary fallback={<Fallback />}>
        <Hero name={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<Fallback />}>
        <Hero name={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary fallback={<Fallback />}>
        <Hero name={"Joker"} />
      </ErrorBoundary>
    </>
  );
}

export default App;
