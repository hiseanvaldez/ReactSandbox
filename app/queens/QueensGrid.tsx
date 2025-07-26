import { useEffect, useState } from "react";
import { FaRegChessQueen, FaXmark } from "react-icons/fa6";
import { colors } from "../constants/puzzle";
import { CellState, Puzzle } from "../models/puzzle";

const QueensGrid = ({ puzzle }: { puzzle: Puzzle }) => {
  const [cellStates, setCellStates] = useState<Record<string, CellState>>({});

  const { size, hives } = puzzle;
  const cellSize = 80;

  useEffect(() => {
    setCellStates({});
  }, [puzzle]);

  const getNextState = (state: CellState): CellState => {
    switch (state) {
      case "empty":
        return "threatened";
      case "threatened":
        return "occupied";
      case "occupied":
        return "empty";
      default:
        return "empty";
    }
  };

  const handleCellClick = (x: number, y: number, isQueen: boolean) => {
    const key = `${x},${y}`;
    const current = cellStates[key] ?? "empty";
    const next = getNextState(current);

    setCellStates((prev) => ({ ...prev, [key]: next }));
  };

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
        const key = `${x},${y}`;
        const state = cellStates[key] ?? "empty";

        const hive = puzzle.hives.find((h) => {
          if (h.queen[0] === x && h.queen[1] === y) {
            isQueen = true;
          }

          return h.blocks.some(([bx, by]) => bx === x && by === y);
        });
        const bgColor = hive?.color ? colors[hive.color] : "white";

        const showQueen = state === "occupied";
        const showThreat = state === "threatened";

        return (
          <div
            key={`${x}-${y}`}
            className="box-border flex items-center justify-center border border-gray-900"
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: bgColor,
            }}
            onClick={() => handleCellClick(x, y, isQueen)}
          >
            {isQueen && !showQueen && !showThreat && (
              <FaRegChessQueen size={32} color="#aaa" />
            )}
            {showQueen && <FaRegChessQueen size={32} color="#111" />}
            {showThreat && !showQueen && <FaXmark size={32} color="#111" />}
          </div>
        );
      })}
    </div>
  );
};

export default QueensGrid;
