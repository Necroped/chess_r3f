import create from "zustand";
import produce from 'immer';

export const get = create((set) => ({
  set: fn => set(produce(fn)),
  characters: {
    Totoro: {
      position: [0, 0],
      move: (newPos) => set({ Totoro: { position: newPos } })
    },
    Female1: {
      position: [1, 1],
      move: (newPos) => set({ Female1: { position: newPos } })
    },
    Female2: {
      position: [2, 2],
      move: (newPos) => set({ Female2: { position: newPos } })
    },
    Male1: {
      position: [3, 3],
      move: (newPos) => set({ Male1: { position: newPos } })
    },
    Male2: {
      position: [4, 4],
      move: (newPos) => set({ Male2: { position: newPos } })
    }
  }
}));
