import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Movie } from "../typescript_definition";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
});
