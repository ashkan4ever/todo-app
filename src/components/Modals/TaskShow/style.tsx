import { css } from "@emotion/react";

export const container = css`
  text-align: center;
  display: grid;
  row-gap: 20px;
  margin-top: 20px;
`;

export const buttonContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;

export const labelText = css`
  color: #8e8e8e;
  font-size: 17px;
`;

export const textContainer = css`
  padding-left: 100px;
  padding-right: 100px;
  text-align: justify;
  display: grid;
  row-gap: 20px;
`;

export const titleContainer = css`
  position: relative;
`;

export const priorityContainer = css`
  position: absolute;
`;
