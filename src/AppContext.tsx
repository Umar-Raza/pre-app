import { createContext } from "react";
import { Note } from "./typs";

export interface iAppContext {
  notes: Note[];
  toggleStarNote: (noteId: number) => void;
  deleteNote: (noteId: number) => void;
}

export const AppContext = createContext<iAppContext>({
  notes: [],
  toggleStarNote: () => {},
  deleteNote: () => {},
});
