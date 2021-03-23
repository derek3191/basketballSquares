import { Cell } from './Cell';
import { Game } from './Game';

export interface Board {
    boardId: string,
      winnerNumbers: number[],
      loserNumbers: number[],
      payout: {
        first: number,
        second: number,
        third: number,
        fourth: number,
        fifth: number,
        sixth: number
      },
      cells: Cell[]
}

export interface User {
  userId: string,
  name: string,
  gamesWon: Game[],
  totalWon: number
}