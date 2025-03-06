import easyDice from "@/data/catalanLetterDiceEasy.json";
import hardDice from "@/data/catalanLetterDiceHard.json";

type Difficulty = 'easy' | 'hard';
type Die = string[];
type DiceSet = Die[];
export type Board = string[][];

export function createBoard(difficulty: Difficulty = 'easy'): Board {
  // Choose the appropriate dice set based on difficulty
  const diceSet: DiceSet = difficulty === 'easy' ? easyDice.dice : hardDice.dice;

  // 1. Shuffle dice
  const shuffledIndices: number[] = shuffleArray([...Array(16).keys()]);

  // 2 & 3. Select a letter from each die and build the board
  const board: string[] = shuffledIndices.map(index => {
    const die: Die = diceSet[index];
    return die[Math.floor(Math.random() * die.length)];
  });

  // Convert the 1D array to a 2D 4x4 array
  return [
    board.slice(0, 4),
    board.slice(4, 8),
    board.slice(8, 12),
    board.slice(12, 16)
  ];
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
