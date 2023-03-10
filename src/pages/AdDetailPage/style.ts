import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const SectionLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    180deg,
    #4529e6 31.25%,
    #f1f3f5 31.26%,
    #f1f3f5 100%
  );

  .div-car-geral {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .div-geral-photo-car {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

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
      height: 240px;
      max-width: 431px;

      @media only screen and (min-width: 768px) {
        & {
          height: 80%;
          max-width: 431px;
        }
      }
    }
  }

  .div-info-car {
    width: 90%;
    height: 250px;
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

    @media only screen and (min-width: 1024px) {
      & {
        height: 250px;
      }
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

    @media only screen and (min-width: 1024px) {
      & {
        height: 350px;
      }
    }
  }

  .div-photo-car {
    width: 90%;
    height: 300px;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;

    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .p-photo {
      padding-left: 20px;
      font-weight: bold;
      margin-top: 20px;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      max-width: 288px;

      li {
        width: 80px;
        height: 80px;
        margin-left: 10px;
        margin-bottom: 10px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background-color: blue;

        list-style: none;
      }

      @media only screen and (min-width: 768px) {
        & {
          margin-left: 10%;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      & {
        height: 350px;
        max-width: 500px;
      }
    }
  }

  .div-user {
    width: 90%;
    height: 350px;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 10px;

    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img-user {
      width: 25%;
      height: 20%;

      margin-top: 10px;

      border-radius: 55px;

      @media only screen and (min-width: 768px) {
        & {
          height: 30%;
          width: 15%;
          max-width: 103.67px;
        }
      }

      @media only screen and (min-width: 1024px) {
        & {
          height: 30%;
          width: 25%;
          max-width: 103.67px;
        }
      }
    }

    .p-name {
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .p-desc-user {
      font-size: 15px;
      width: 90%;
      margin-bottom: 10px;
    }

    @media only screen and (min-width: 768px) {
      & {
        height: 350px;
      }
    }

    @media only screen and (min-width: 1024px) {
      & {
        height: 350px;
        width: 90%;
        max-width: 500px;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    & {
      flex-direction: row;
      width: 100%;
    }
  }
`;

export const SectionRigth = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f1f3f5;
  width: 100%;

  .div-comments {
    display: flex;
    flex-direction: column;

    background-color: white;

    width: 90%;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;

    h2 {
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
    }

    li {
      list-style: none;
      margin-bottom: 15px;

      .p-name-li {
        font-weight: bold;
      }

      span {
        font-weight: normal;
      }
    }

    @media only screen and (min-width: 1024px) {
      & {
        margin-left: 2.5%;
        max-width: 45%;
      }
    }
  }

  .div-user-comments {
    display: flex;
    flex-direction: column;

    background-color: white;

    width: 90%;
    margin-left: 5%;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;

    p {
      font-weight: bold;
      margin-bottom: 15px;
      margin-top: 10px;
    }

    textarea {
      width: 90%;
      height: 120px;

      margin-left: 5%;
      margin-bottom: 10px;

      border: 1px solid #e9ecef;
      border-radius: 8px;

      color: #868e96;
    }

    @media only screen and (min-width: 1024px) {
      & {
        margin-left: 2.5%;
        max-width: 45%;
      }
    }
  }
`;
