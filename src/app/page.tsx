"use client";
import { useState, useEffect } from "react";
import { createBoard } from "@/utilities/dice-utils";
import { Board } from "@/utilities/dice-utils";

export default function Home() {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  const generateNewBoard = () => {
    setBoard(createBoard());
  };

  if (!board) {
    return <div>Loading...</div>; // Prevent hydration mismatch
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          {/* Render the board */}
          <div className="grid grid-cols-4 gap-2">
            {board.flat().map((letter, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 border border-gray-400 rounded"
              >
                {letter}
              </div>
            ))}
          </div>
          {/* Button to generate a new board */}
          <button
            onClick={generateNewBoard}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            New Board
          </button>
        </div>
      </main>
    </div>
  );
}
