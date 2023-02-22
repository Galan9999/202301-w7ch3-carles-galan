import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DogsStructure } from "../../../types";

const initialDogs: DogsStructure = [];

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: initialDogs,
  reducers: {
    loadDogs: (currentDogs, action: PayloadAction<DogsStructure>) => [
      ...action.payload,
    ],
  },
});

export const dogsReducer = dogsSlice.reducer;
export const { loadDogs: loadDogsActionCreator } = dogsSlice.actions;
