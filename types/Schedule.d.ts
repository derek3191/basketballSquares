import { Game } from './Game';
export interface Schedule {
    "inputMD5Sum": string;
    "updated_at": string;
    "games": Game[];
}
