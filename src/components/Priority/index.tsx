/** @jsxImportSource @emotion/react */
import { memo, useCallback } from "react";
import { Space } from "antd";
import { PriorityType } from "@/store/slices/todoSlice";
import { container, circle, textStyle } from "./style";

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
