import styled from "styled-components";

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  background-color: beige;
  width: 100%;

  .div-car {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    .img-car {
      width: 90%;
      height: 60%;
    }
  }

  .div-info-car {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;

    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: bold;
      width: 90%;

      margin-top: 15px;
    }

    .div-info-car-infos {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      width: 90%;
      margin-top: 15px;
    }
  }

  .div-desc {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      margin-bottom: 10px;
      font-weight: bold;
      padding-left: 20px;
    }

    p {
      width: 90%;
      padding-left: 20px;
    }

    @media only screen and (min-width: 586px) {
      & {
      }
    }
  }
`;
