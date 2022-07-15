import { css } from "@emotion/react";

export default css`
  * {
    box-sizing: border-box;
  }
  html {
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #666;
    background: url("/hive.jpg");
    max-width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  .main-container {
    max-width: 1200px;
    margin: auto;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 100px 40px;
  }

  @media only screen and (max-width: 600px) {
    .main-container {
      padding: 100px 15px;
    }
  }
`;
