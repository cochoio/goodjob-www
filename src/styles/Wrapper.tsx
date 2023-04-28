import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .background-image {
    position: absolute;
    z-index: -1;
  }

  .text-container {
    padding: 30px 10% 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .bold-text-container {
    display: flex;
    flex-direction: column;
  }

  .bold-text {
    font-size: 50px;
    font-weight: bold;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }

  .text {
    font-size: 40px;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }

  .text-box {
    margin-bottom: 20px;
  }

  .download-container {
    text-align: right;
  }

  .download-image {
    margin-right: 27px;
  }

  @media screen and (max-width: 850px) {
    .background-image {
      width: 100%;
      height: auto;
    }
  }

  /* Tablets Size */
  @media screen and (max-width: 768px) {
    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    .bold-text-container {
      text-align: center;
    }

    .bold-text {
      font-size: 43px;
    }

    .text-line {
      display: flex;
      flex-direction: column;
    }

    .text {
      font-size: 33px;
    }

    .download-container {
      text-align: center;
    }

    .download-image {
      margin: 5px;
    }
  }

  /* Phone Size */
  @media screen and (max-width: 580px) {
    .bold-text {
      font-size: 38px;
    }

    .text {
      font-size: 28px;
    }

    .download-container {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    .download-image {
      width: 180px;
      height: auto;
    }
  }

  /* Small Phone Size */
  @media screen and (max-width: 480px) {
    .bold-text {
      font-size: 28px;
    }

    .text {
      font-size: 22px;
    }

    .download-image {
      width: 150px;
      height: auto;
    }
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfb;
  padding: 15px;

  .text-container {
    margin: 15px 0;
  }

  .text-box {
    display: flex;
  }

  .text {
    margin: 1px 0;
  }

  p {
    color: #515151;
    font-size: 15px;
  }

  .text:nth-child(odd)::after {
    content: "|";
    margin: 0 20px;
  }

  .download-icon {
    margin: 10px;
    text-align: right;
  }

  /* Tablets Size */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    .text-box {
      justify-content: center;
    }

    div:first-child {
      margin-bottom: 10px;
    }
  }
`;

export const BoardWrapper = styled.div`
  height: 600px;
  overflow: hidden;

  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
  }

  .board-image {
    transform: translateY(150px);
    z-index: -1;
  }

  .text-container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .text-left,
  .text-right {
    text-align: center;
    padding: 0 30px;
  }

  .text-left {
    transform: translateY(30px);
  }

  .text-right {
    transform: translateY(150px);
  }

  p {
    font-size: 40px;
    font-weight: 700;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }

  @media screen and (max-width: 768px) {
    .board-image {
      width: auto;
      height: 800px;
    }

    .text-container {
      flex-direction: column;
    }

    .text-left,
    .text-right {
      transform: none;
    }

    .text-left {
      transform: translateY(-150px);
    }

    .text-right {
      transform: translateY(80px);
    }

    p {
      font-size: 33px;
    }

    @media screen and (max-width: 480px) {
      .board-image {
        width: auto;
        height: 700px;
      }

      p {
        font-size: 25px;
      }
    }
  }
`;
