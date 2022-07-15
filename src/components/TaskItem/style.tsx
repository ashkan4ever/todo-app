import { css } from "@emotion/react";

export const container = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px 40px;
  padding: 20px;
  box-shadow: 0 1px 4px -2px grey;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  background-color: #fdfdfd;

  &:hover {
    box-shadow: 0 3px 7px -2px grey;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;

    & > *:last-child {
      margin: auto;
    }
  }
`;
