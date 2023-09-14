import React, {Suspense} from "react";
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList />
      </Suspense>
    </div>
  );
}
export default Home;