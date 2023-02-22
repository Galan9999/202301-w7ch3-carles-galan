import styled from "styled-components";

const DogStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: aliceblue;

  .dog__photo {
    border-radius: 10px;
  }

  .dog__button {
    background-color: none;
    border: none;
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default DogStyled;
