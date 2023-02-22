import { useCallback } from "react";
import { loadDogsActionCreator } from "../store/features/dogs/dogsSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getDogs = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL_API!);

      const dogs = await response.json();

      dispatch(loadDogsActionCreator(dogs.dogs));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getDogs };
};

export default useApi;
