import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DogStructure } from "../../../types";

const initialDog: DogStructure = {
  message: "",
  status: "",
};

export const dogSlice = createSlice({
  name: "dog",
  initialState: initialDog,
  reducers: {
    loadDog: (currentDog, action: PayloadAction<DogStructure>) =>
      action.payload,
  },
});

export const dogReducer = dogSlice.reducer;
export const { loadDog: loadDogActionCreator } = dogSlice.actions;
