/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { Space } from "antd";
import { PriorityType } from "../../types";
import { container, circle, textStyle } from "./style";

interface IProps {
  priority: PriorityType;
  color?: string;
}

const Priority = ({ priority, color = "#fff" }: IProps) => {
  return (
    <Space css={container}>
      <span css={textStyle(color)}>{priority}</span>
      <div css={circle(color)}></div>
    </Space>
  );
};

export default memo(Priority);
