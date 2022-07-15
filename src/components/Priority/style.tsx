import { css } from "@emotion/react";

export const container = (align: string) => css`
  justify-content: flex-end;
  ${align === "left" ? "flex-direction: row-reverse;" : ""}
`;

export const circle = (color: string) => css`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: ${color};
`;

export const textStyle = (color: string) => css`
  color: ${color};
`;
