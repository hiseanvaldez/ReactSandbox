import { colors } from "../constants/colors";
import { Puzzle } from "../models/puzzle";

const QueensGrid = ({ puzzle }: { puzzle: Puzzle }) => {
  const { size, hives } = puzzle;
  const cellSize = 80;
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
      }}
    >
      {Array.from({ length: size * size }, (_, i) => {
        const x = i % size;
        const y = Math.floor(i / size);

        const hive = puzzle.hives.find((h) =>
          h.blocks.some(([bx, by]) => bx === x && by === y)
        );

        const bgColor = hive?.color ? colors[hive.color] : "white";

        return (
          <div
            key={`${x}-${y}`}
            className="box-border border border-gray-900 "
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: bgColor,
            }}
          />
        );
      })}
    </div>
  );
};

export default QueensGrid;
