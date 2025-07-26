import { FaRegChessQueen } from "react-icons/fa6";
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
        let isQueen = false;
        const x = i % size;
        const y = Math.floor(i / size);

        const hive = puzzle.hives.find((h) => {
          if (h.queen[0] === x && h.queen[1] === y) {
            isQueen = true;
          }

          return h.blocks.some(([bx, by]) => bx === x && by === y);
        });

        const bgColor = hive?.color ? colors[hive.color] : "white";

        return (
          <div
            key={`${x}-${y}`}
            className="box-border flex items-center justify-center border border-gray-900"
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: bgColor,
            }}
          >
            {isQueen ? <FaRegChessQueen size={32} color="#333" /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default QueensGrid;
