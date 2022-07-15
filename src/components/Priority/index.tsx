/** @jsxImportSource @emotion/react */
import { memo, useCallback } from "react";
import { Space } from "antd";
import { container, circle, textStyle } from "./style";
import { PriorityType } from "../../store/slices/todoSlice";

interface IProps {
  priority: PriorityType;
  align?: "left" | "right";
}

const Priority = ({ priority, align = "right" }: IProps) => {
  const setColor = useCallback(() => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "#fbbc43";
      case "Low":
        return "green";

      default:
        return "white";
    }
  }, [priority]);

  return (
    <Space css={container(align)}>
      <span css={textStyle(setColor())}>{priority}</span>
      <div css={circle(setColor())}></div>
    </Space>
  );
};

export default memo(Priority);
