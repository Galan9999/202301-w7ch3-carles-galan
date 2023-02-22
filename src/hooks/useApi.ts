import { useCallback } from "react";
import { loadDogActionCreator } from "../store/features/dogs/dogsSlice";
import { useAppDispatch } from "../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getDog = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL_API!);

      const dog = await response.json();

      dispatch(loadDogActionCreator(dog));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getDog };
};

export default useApi;
