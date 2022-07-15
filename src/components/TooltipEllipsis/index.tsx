/** @jsxImportSource @emotion/react */
import { memo, ReactNode } from "react";
import { Tooltip } from "antd";
import { SerializedStyles } from "@emotion/react";
import { textStyle } from "./style";

interface IProps {
  text: string;
  renderProp: (style: SerializedStyles) => ReactNode;
}

const TooltipEllipsis = ({ text, renderProp }: IProps) => {
  return (
    <div css={textStyle}>
      <Tooltip title={text}>{renderProp(textStyle)}</Tooltip>
    </div>
  );
};

export default memo(TooltipEllipsis);
