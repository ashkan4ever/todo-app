import { css } from "@emotion/react";

export const container = css`
  position: relative;
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const leftButton = css`
  position: absolute;
  top: 6px;

  @media only screen and (max-width: 600px) {
    position: static;
  }
`;

export const titleStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;
