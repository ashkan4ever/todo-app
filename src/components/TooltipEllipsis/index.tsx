/** @jsxImportSource @emotion/react */
import { memo, ReactNode } from "react";
import { Tooltip } from "antd";
import { textStyle } from "./style";
import { SerializedStyles } from "@emotion/react";

interface IProps {
  text: string;
  renderProp: (style: SerializedStyles) => ReactNode;
}

const TaskItem = ({ text, renderProp }: IProps) => {
  return (
    <div css={textStyle}>
      <Tooltip title={text}>{renderProp(textStyle)}</Tooltip>
    </div>
  );
};

export default memo(TaskItem);
