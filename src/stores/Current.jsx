import create from "zustand";
import produce from 'immer';

export const get = create((set) => ({
  set: fn => set(produce(fn)),
  character: null,
  square: null
}));
