"use client";

import { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { useLazyGetPuzzleQuery } from "../redux/services/queensApi";
import QueensGrid from "./QueensGrid";

const page = () => {
  const [fetchPuzzle, { data, isLoading, error }] = useLazyGetPuzzleQuery();

  const getRandomSize = () => {
    return Math.floor(Math.random() * (12 - 6 + 1)) + 6;
  };

  useEffect(() => {
    fetchPuzzle(getRandomSize());
  }, []);

  return (
    <Container>
      <h3>Queens</h3>
      {!isLoading && data && <QueensGrid puzzle={data} />}

      <div className="mt-3">
        <Button
          onClick={() => fetchPuzzle(getRandomSize())}
          disabled={isLoading}
          label="New Puzzle"
        />
      </div>
    </Container>
  );
};

export default page;
