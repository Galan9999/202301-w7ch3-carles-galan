import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import DogStyled from "./DogStyled";

const Dog = (): JSX.Element => {
  const { getDog } = useApi();

  const dog = useAppSelector((state) => state.dog);

  useEffect(() => {
    getDog();
  }, [getDog]);

  return (
    <DogStyled className="dog">
      <h1 className="dog__title">ADORABLE</h1>
      <button className="dog__button" aria-label="cuteness" onClick={getDog}>
        ❤️
      </button>
      <img className="dog__photo" src={dog.message} alt="dog" />
    </DogStyled>
  );
};
export default Dog;
