import { Cell } from './Cell';
export interface Board {
    "boardId": string;
    "winnerNumbers": number[];
    "loserNumbers": number[];
    "payout": {
        "first": number;
        "second": number;
        "third": number;
        "fourth": number;
        "fifth": number;
        "sixth": number;
    };
    "cells": Cell[];
}
