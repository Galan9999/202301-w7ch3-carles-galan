import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";

const Dog = (): JSX.Element => {
  const { getDog } = useApi();

  const dog = useAppSelector((state) => state.dog);

  useEffect(() => {
    getDog();
  }, [getDog]);

  return (
    <div>
      <img src={dog.message} alt="dog" />
    </div>
  );
};
export default Dog;
