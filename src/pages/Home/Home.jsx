import React, { Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import Books from "../../components/Books/Books";
import { fetchBooks } from "../../utilities/apis";
import Loading from "../../components/Fallback/Loading";
const Home = () => {
  const bookPromise = fetchBooks();

  return (
    <>
      <Hero></Hero>
      <Suspense fallback={<Loading />}>
        <Books bookPromise={bookPromise}></Books>
      </Suspense>
    </>
  );
};

export default Home;
